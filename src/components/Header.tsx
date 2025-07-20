"use client";

import type React from "react";
import { LogIn, LogOut } from "lucide-react";
import type { User } from "../types";

interface HeaderProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">f</span>
          </div>
          <span className="text-xl font-semibold">foo-rum</span>
        </div>

        <button
          onClick={user ? onLogout : onLogin}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          {user ? (
            <>
              <LogOut size={20} />
              <span>Logout</span>
            </>
          ) : (
            <>
              <LogIn size={20} />
              <span>Login</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
