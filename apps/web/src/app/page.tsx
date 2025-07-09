"use client";

import ArticleList from "../northern-star/ArticleList/ArticleList";
import { articles } from "../hardcoded-data/articles";
import { useContext } from "react";
import { FollowedAuthorsContext } from '../app/contexts/authorsProvider'

export default function HomePage() {
    const ctx = useContext(FollowedAuthorsContext);
  
    if (!ctx) {
      throw new Error("FollowedAuthorsContext not found! Did you forget to wrap the tree?");
    }
  
    const { followedAuthors } = ctx;
  
    const articlesByCategoryWithFavoritesFirst = articles.reduce<Record<string, typeof articles>>(
      (acc, article) => {
        const category = article.type[0] || "Uncategorized";
        if (!acc[category]) acc[category] = [];
        acc[category].push(article);
        return acc;
      },
      {}
    );

    Object.keys(articlesByCategoryWithFavoritesFirst).forEach((category) => {
      const original = articlesByCategoryWithFavoritesFirst[category];
      const followed = [];
      const notFollowed = [];

      for (const article of original) {
        if (followedAuthors?.includes(article.author)) {
          followed.push(article);
        } else {
          notFollowed.push(article);
        }
      }

      articlesByCategoryWithFavoritesFirst[category] = followed.concat(notFollowed);
    });

  // Sorted categories
  const categories = Object.keys(articlesByCategoryWithFavoritesFirst).sort();

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {categories.map((category) => (
          <ArticleList
            key={category}
            title={category}
            articles={articlesByCategoryWithFavoritesFirst[category]}
          />
        ))}
      </div>
    </main>
  );
}
