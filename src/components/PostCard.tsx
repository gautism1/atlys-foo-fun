"use client";

import type React from "react";
import { Heart, MessageCircle, Share } from "lucide-react";
import type { Post } from "../types";

interface PostCardProps {
  post: Post;
  onAuthRequired: () => void;
  isAuthenticated: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onAuthRequired,
  isAuthenticated,
}) => {
  const handleInteraction = (action: string) => {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }
    alert("Function not implemented");
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <img
          src={post.author.avatar || "/placeholder.svg"}
          alt={post.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
            <span className="text-gray-500 text-sm">{post.timestamp}</span>
          </div>

          <div className="flex items-start space-x-3 mb-4">
            <span className="text-2xl">{post.emoji}</span>
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>

          <div className="flex items-center space-x-6">
            {[
              { icon: Heart, name: "like" },
              { icon: MessageCircle, name: "comment" },
              { icon: Share, name: "share" },
            ].map(({ icon: Icon, name }) => (
              <button
                key={name}
                onClick={() => handleInteraction(name)}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
