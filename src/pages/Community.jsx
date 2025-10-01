// src/pages/Community.jsx
import { useState, useEffect } from "react";

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ article: "", law: "" });

  // get current user email
  const email = localStorage.getItem("currentUser");

  // load posts for this user on mount
  useEffect(() => {
    if (email) {
      const savedPosts = JSON.parse(localStorage.getItem(`posts_${email}`) || "[]");
      setPosts(savedPosts);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.article || !form.law) return;

    const newPost = { ...form, id: Date.now() };

    // update state
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);

    // save to localStorage (per user)
    localStorage.setItem(`posts_${email}`, JSON.stringify(updatedPosts));

    // increment community posts count (per user)
    const postsCount = parseInt(localStorage.getItem(`postsCount_${email}`) || "0", 10) + 1;
    localStorage.setItem(`postsCount_${email}`, postsCount);

    // clear form
    setForm({ article: "", law: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-16 relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-12">
          Community Engine
        </h1>

        {/* Upload Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-indigo-100 mb-12"
        >
          <label className="block text-gray-700 font-medium mb-1">
            Article Number
          </label>
          <input
            type="text"
            placeholder="Enter article number"
            value={form.article}
            onChange={(e) => setForm({ ...form, article: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <label className="block text-gray-700 font-medium mb-1">
            Law or Thought
          </label>
          <textarea
            placeholder="Write your law or thought..."
            value={form.law}
            onChange={(e) => setForm({ ...form, law: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
          />

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-indigo-600 transition"
          >
            Post
          </button>
        </form>

        {/* Posts */}
        <div className="max-w-3xl mx-auto space-y-6">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              No posts yet. Be the first!
            </p>
          ) : (
            posts.map((p) => (
              <div
                key={p.id}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-indigo-700 mb-2">
                  Article {p.article}
                </h3>
                <p className="text-gray-700 leading-relaxed">{p.law}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
