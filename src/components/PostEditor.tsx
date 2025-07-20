"use client";

import type React from "react";
import { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Code,
  Smile,
  Plus,
  Mic,
  MapPin,
  Send,
} from "lucide-react";

interface PostEditorProps {
  onCreatePost: (content: string) => void;
  onAuthRequired: () => void;
  isAuthenticated: boolean;
}

export const PostEditor: React.FC<PostEditorProps> = ({
  onCreatePost,
  onAuthRequired,
  isAuthenticated,
}) => {
  const [content, setContent] = useState("");

  const handleToolbarClick = (tool: string) => {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }
    alert("Function not implemented");
  };

  const handleSubmit = () => {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }

    if (content.trim()) {
      onCreatePost(content.trim());
      setContent("");
    }
  };

  const handleContentClick = () => {
    if (!isAuthenticated) {
      onAuthRequired();
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
        <div className="flex items-center space-x-1">
          <select
            className="text-sm border-0 bg-transparent focus:ring-0 cursor-pointer"
            onClick={() => handleToolbarClick("format")}
          >
            <option>Paragraph</option>
          </select>

          <div className="flex items-center space-x-1 ml-4">
            {[
              { icon: Bold, name: "bold" },
              { icon: Italic, name: "italic" },
              { icon: Underline, name: "underline" },
              { icon: List, name: "list" },
              { icon: ListOrdered, name: "ordered-list" },
              { icon: Quote, name: "quote" },
              { icon: Code, name: "code" },
            ].map(({ icon: Icon, name }) => (
              <button
                key={name}
                onClick={() => handleToolbarClick(name)}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
              >
                <Icon size={16} className="text-gray-600" />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleToolbarClick("delete")}
          className="p-2 hover:bg-red-50 rounded transition-colors"
        >
          <div className="w-4 h-4 bg-red-500 rounded"></div>
        </button>
      </div>

      {/* Content Area */}
      <div className="mb-4">
        <div className="flex items-start space-x-3">
          <Smile size={20} className="text-gray-400 mt-3" />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onClick={handleContentClick}
            placeholder="How are you feeling today?"
            className="flex-1 min-h-[100px] border-0 resize-none focus:ring-0 text-gray-700 placeholder-gray-400 text-lg"
            style={{ outline: "none" }}
          />
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {[
            { icon: Plus, name: "add" },
            { icon: Mic, name: "voice" },
            { icon: MapPin, name: "location" },
          ].map(({ icon: Icon, name }) => (
            <button
              key={name}
              onClick={() => handleToolbarClick(name)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Icon size={20} className="text-gray-500" />
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!content.trim()}
          className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
