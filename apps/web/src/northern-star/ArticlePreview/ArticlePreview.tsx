"use client";

import Link from 'next/link';
import { useContext } from 'react';
import { FollowedAuthorsContext } from '../../app/contexts/authorsProvider'

export type Article = {
  title: string;
  slug: string;
  author: string;
  date: string;
  summary: string;
  image?: string;
};

export default function ArticlePreview({ article }: { article: Article }) {
  const ctx = useContext(FollowedAuthorsContext);

  if (!ctx) throw new Error("FollowedAuthorsContext not found");

  const { followedAuthors } = ctx;

  const isFollowing = followedAuthors.some((id) => {
    if (id === article.slug) {
      return true;
    }
    return false;
  });

  return (
    <Link
      href={`/article/${article.slug}`}
      className="block bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{article.title}</h2>
        <p className="text-gray-700">{article.summary}</p>
        {isFollowing && (
          <span className="inline-block mt-2 px-3 py-1 text-xs bg-green-600 text-white rounded-full">
            Following
          </span>
        )}
      </div>
    </Link>
  );
}
