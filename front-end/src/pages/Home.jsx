import React, { useEffect, useState } from "react";

import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-xl uppercase">
      {title}
    </h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/v1/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto fade-in relative z-10">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <h1 className="font-extrabold text-6xl mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            AI Art Gallery
          </span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Explore a curated collection of AI-generated masterpieces created by
          our community. Each image tells a unique story, powered by imagination
          and artificial intelligence.
        </p>
      </div>

      {/* Search Section */}
      <div className="relative z-10 backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
        <FormField
          labelName="Discover Artworks"
          type="text"
          name="text"
          placeholder="Search by prompts or creator names..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      {/* Gallery Section */}
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <div className="mb-8 text-center">
                <h2 className="font-medium text-xl">
                  <span className="text-gray-400">Showing results for </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {searchText}
                  </span>
                </h2>
              </div>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4">
              {searchText ? (
                <RenderCards data={searchedResults} title="No Artworks Found" />
              ) : (
                <RenderCards data={allPosts} title="No Artworks Yet" />
              )}
            </div>
          </>
        )}
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900/50 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Home;
