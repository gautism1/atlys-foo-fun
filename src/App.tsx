"use client";
import React from "react";
import { useState } from "react";
import { Header } from "./components/Header";
import { AuthModal } from "./components/AuthModal";
import { PostEditor } from "./components/PostEditor";
import { PostFeed } from "./components/PostFeed";
import { useAuth } from "./hooks/useAuth";
import type { Post } from "./types";

// Mock initial posts
const initialPosts: Post[] = [
  {
    id: "1",
    author: {
      name: "Theresa Webb",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    emoji: "😊",
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    emoji: "👍",
  },
  {
    id: "3",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    emoji: "💀",
  },
];

function App() {
  const { user, login, logout, signup } = useAuth();
  const [authModal, setAuthModal] = useState<"signin" | "signup" | null>(null);
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleAuthRequired = (action: "signin" | "signup" = "signin") => {
    if (!user) {
      setAuthModal(action);
    }
  };

  const handleCreatePost = (content: string) => {
    if (!user) {
      handleAuthRequired();
      return;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        name: user.name,
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content,
      timestamp: "now",
      emoji: "😊",
    };

    setPosts([newPost, ...posts]);
  };

  const handleLogin = async (email: string, password: string) => {
    const success = await login(email, password);
    if (success) {
      setAuthModal(null);
    }
    return success;
  };

  const handleSignup = async (email: string, password: string) => {
    const success = await signup(email, password);
    if (success) {
      setAuthModal(null);
    }
    return success;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        user={user}
        onLogin={() => setAuthModal("signin")}
        onLogout={logout}
      />

      <main className="max-w-2xl mx-auto px-4 py-8">
        <PostEditor
          onCreatePost={handleCreatePost}
          onAuthRequired={handleAuthRequired}
          isAuthenticated={!!user}
        />

        <PostFeed
          posts={posts}
          onAuthRequired={handleAuthRequired}
          isAuthenticated={!!user}
        />
      </main>

      {authModal && (
        <AuthModal
          mode={authModal}
          onClose={() => setAuthModal(null)}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onSwitchMode={(mode) => setAuthModal(mode)}
        />
      )}
    </div>
  );
}

export default App;
