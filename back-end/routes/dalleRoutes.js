import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Please provide a prompt",
      });
    }

    console.log("Generating image for prompt:", prompt);

    const response = await axios({
      method: "post",
      url: "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
      },
      data: {
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 30,
        samples: 1,
        style_preset: "photographic",
        image_format: "png",
      },
    });

    if (!response.data.artifacts || !response.data.artifacts[0]) {
      throw new Error("No image data received from Stability AI");
    }

    const image = response.data.artifacts[0].base64;
    res.status(200).json({
      success: true,
      photo: image,
    });
  } catch (error) {
    console.error(
      "Image Generation Error:",
      error.response?.data || error.message
    );

    // Handle specific error cases
    if (error.response?.data?.name === "bad_request") {
      return res.status(400).json({
        success: false,
        error: "Invalid request to Stability AI. Please try again.",
      });
    }

    if (error.response?.status === 401) {
      return res.status(401).json({
        success: false,
        error: "Invalid Stability AI API key.",
      });
    }

    res.status(500).json({
      success: false,
      error: error.response?.data?.message || "Failed to generate image",
    });
  }
});

export default router;
