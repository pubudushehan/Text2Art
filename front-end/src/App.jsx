import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center px-4 sm:px-8 py-4 backdrop-blur-lg bg-black/30 border-b border-white/10 fixed top-0 left-0 right-0 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 relative hover:opacity-80 transition-opacity"
        >
          <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Text2Art
          </span>
        </Link>

        <Link
          to="/create-post"
          className="btn-primary text-white relative hover:opacity-90 transition-opacity"
        >
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)] mt-[73px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
