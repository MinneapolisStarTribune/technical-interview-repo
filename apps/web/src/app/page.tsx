"use client";

import { useState } from "react";
import ArticlePreview from '../northern-star/ArticlePreview/ArticlePreview';
import { articles } from "../hardcoded-data/articles";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Group articles by first type
  const articlesByCategory = articles.reduce<Record<string, typeof articles>>((acc, article) => {
    const category = article.type[0] || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(article);
    return acc;
  }, {});

  const categories = Object.keys(articlesByCategory).sort();

  // When no filter, show grouped subsections; else filtered flat list
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <nav className="w-full md:w-48 sticky top-20 self-start">
          <h2 className="text-xl font-bold mb-4 text-emerald-600">Categories</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`block w-full text-left px-4 py-2 rounded ${
                  selectedCategory === null
                    ? "bg-emerald-600 text-white"
                    : "hover:bg-emerald-100 text-gray-700"
                } transition`}
              >
                Reset
              </button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    selectedCategory === category
                      ? "bg-emerald-600 text-white"
                      : "hover:bg-emerald-100 text-gray-700"
                  } transition`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Articles */}
        <section className="flex-1">
          {selectedCategory === null ? (
            <>
              {categories.map((category) => (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-emerald-700">{category}</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {articlesByCategory[category].map((article) => (
                      <ArticlePreview article={article} key={article.slug} />
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-6 text-emerald-600">{selectedCategory}</h1>
              <div className="grid gap-6 md:grid-cols-2">
                {articlesByCategory[selectedCategory]?.map((article) => (
                  <ArticlePreview article={article} key={article.slug} />
                )) ?? (
                  <p className="text-gray-600">No articles found in this category.</p>
                )}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
