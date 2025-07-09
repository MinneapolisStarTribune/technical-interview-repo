"use client";

import React, { createContext, useEffect, useState } from "react";

export interface FollowedAuthorsContextType {
  followedAuthors: string[];
  followAuthor: (authorId: any) => void;
  unfollowAuthor: (authorId: any) => void;
}

export const FollowedAuthorsContext = createContext<FollowedAuthorsContextType | undefined>(undefined);

export const AuthorsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [followedAuthors, setFollowedAuthors] = useState<string[]>([]);

  useEffect(() => {
    const currentAuthors = window.localStorage.getItem("currentAuthors");
    if (currentAuthors) {
      setFollowedAuthors(JSON.parse(currentAuthors));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("currentAuthors", JSON.stringify(followedAuthors));
  }, []);

  const followAuthor = (authorId: any) => {
    setFollowedAuthors([...followedAuthors, authorId]);
  };

  const unfollowAuthor = (authorId: string) => {
    setFollowedAuthors(followedAuthors.filter((id) => id !== authorId));
  };

  console.log(followedAuthors);
  return (
    <FollowedAuthorsContext.Provider
      value={{ followedAuthors, followAuthor, unfollowAuthor }}
    >
      {children}
    </FollowedAuthorsContext.Provider>
  );
};
