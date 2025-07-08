"use client";

import React, { createContext, useEffect, useState } from "react";

export interface FollowedAuthorsContextType {
  followedAuthors: string[];
  followAuthor: (authorId: any) => void;
  unfollowAuthor: (authorId: any) => void;
}

export const FollowedAuthorsContext = createContext<FollowedAuthorsContextType | undefined>(undefined);

const getInitialState = () => {
  const currentAuthors = window.localStorage.getItem("currentAuthors");
  return currentAuthors ? JSON.parse(currentAuthors) : null;
};
export const AuthorsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [followedAuthors, setFollowedAuthors] = useState<string[]>(
      getInitialState()
    );

  useEffect(() => {
    localStorage.setItem("followedAuthors", JSON.stringify(followedAuthors));
  }, []);

  const followAuthor = (authorId: any) => {
    setFollowedAuthors([...followedAuthors, authorId]);
  };

  const unfollowAuthor = (authorId: string) => {
    setFollowedAuthors(followedAuthors.filter((id) => id !== authorId));
  };

  return (
    <FollowedAuthorsContext.Provider
      value={{ followedAuthors, followAuthor, unfollowAuthor }}
    >
      {children}
    </FollowedAuthorsContext.Provider>
  );
};
