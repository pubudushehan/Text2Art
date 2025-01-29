# ✨ Text2Art - AI Image Generation Platform

<div align="center">
  <h1>🎨 Transform Your Imagination into Art</h1>
  <p>Modern AI-powered platform to create stunning artwork from text.</p>
</div>

## 🌟 Overview

**Text2Art** is an innovative web application that brings your ideas to life as artwork, powered by Stability AI. Featuring a sleek glass-morphic UI, it offers real-time image generation, a community gallery, and seamless user experience across all devices.

## ✨ Features

- **🎨 AI Image Generation**: Create breathtaking artwork from your text descriptions using Stability AI.
- **💡 Smart Prompt Suggestions**: Spark creativity with auto-generated prompts.
- **🌐 Community Gallery**: Browse, share, and be inspired by artwork created by the community.
- **🔍 Real-time Search**: Find artwork by prompts or creator names with ease.
- **🌈 Modern UI**: Enjoy a glass-morphic design with smooth animations and gradients.
- **📱 Responsive Design**: Access Text2Art effortlessly from any device.
- **☁️ Cloud Storage**: Safely store your creations using Cloudinary.

## 🚀 Getting Started

### Prerequisites

- Install **Node.js** (v14 or higher)
- Create accounts for **MongoDB**, **Stability AI API**, and **Cloudinary**

### Steps to Run

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd text2art
   ```

2. **Install Dependencies**

   **Frontend**

   ```bash
   cd front-end
   npm install
   ```

   **Backend**

   ```bash
   cd ../back-end
   npm install
   ```

3. **Set Environment Variables**

   Create a `.env` file in the `back-end` directory:

   ```
   MONGODB_URL=your_mongodb_url
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Start Servers**

   **Backend Server**

   ```bash
   cd back-end
   npm start
   ```

   **Frontend Development Server**

   ```bash
   cd front-end
   npm run dev
   ```

5. **Launch the App**
   Open `http://localhost:3000` in your browser.

## 🎨 Usage

### Creating Artwork

1. Go to the Create page.
2. Enter your name or artist alias.
3. Write a descriptive prompt or let the Auto Prompt feature inspire you.
4. Click Generate Artwork to create your masterpiece.
5. Share your creation with the community.

### Exploring the Gallery

- Browse through the community's stunning AI-generated artworks.
- Use the Search bar to find specific pieces or artists.
- View details about the artwork, including the prompt and creator information.

## 🛠️ Tech Stack

### Frontend

- React.js with Vite for blazing-fast performance.
- Tailwind CSS for responsive and stylish designs.
- React Router for smooth navigation.

### Backend

- Node.js & Express for robust server-side functionality.
- MongoDB for scalable and reliable data storage.
- Stability AI API for cutting-edge AI integration.
- Cloudinary for secure and efficient image storage.

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.
