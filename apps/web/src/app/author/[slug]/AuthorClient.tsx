"use client";

import { useContext } from "react";
import { FollowedAuthorsContext } from "../../contexts/authorsProvider";

export interface Author {
  name: string;
  slug: string;
  bio: string;
  headshot: string;
}

interface AuthorClientProps {
  author: Author;
}

export default function AuthorClient({ author }: AuthorClientProps) {
  const ctx = useContext(FollowedAuthorsContext);

  if (!ctx) {
    throw new Error("FollowedAuthorsContext not found! Did you forget to wrap the tree?");
  }

  const { followedAuthors, followAuthor, unfollowAuthor } = ctx;

  const isFollowing = followedAuthors.some((id) => {
    if (id === author.slug) {
      return true;
    }
    return false;
  });

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Headshot + info row */}
      <div className="flex items-start space-x-6">
        {author.headshot && (
          <img
            src={author.headshot}
            alt={author.name}
            className="w-24 h-24 rounded-full"
          />
        )}

        {/* Name + Bio + Follow Button stacked vertically */}
        <div>
          <h1 className="text-4xl font-bold text-primary-emerald-green mb-2">
            {author.name}
          </h1>
          <article className="prose prose-green mb-4">
            <p>{author.bio}</p>
          </article>

          <button
            className={`px-4 py-2 rounded ${
              isFollowing ? "bg-green-600 text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() =>
              isFollowing
                ? unfollowAuthor(author.slug)
                : followAuthor(author.slug)
            }
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </main>
  );
}
