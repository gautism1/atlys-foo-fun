import type React from "react";
import { PostCard } from "./PostCard";
import type { Post } from "../types";

interface PostFeedProps {
  posts: Post[];
  onAuthRequired: () => void;
  isAuthenticated: boolean;
}

export const PostFeed: React.FC<PostFeedProps> = ({
  posts,
  onAuthRequired,
  isAuthenticated,
}) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onAuthRequired={onAuthRequired}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </div>
  );
};
