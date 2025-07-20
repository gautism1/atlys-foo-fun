"use client";

import type React from "react";
import { useState } from "react";
import { X, LogIn } from "lucide-react";

interface AuthModalProps {
  mode: "signin" | "signup";
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<boolean>;
  onSignup: (email: string, password: string) => Promise<boolean>;
  onSwitchMode: (mode: "signin" | "signup") => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  mode,
  onClose,
  onLogin,
  onSignup,
  onSwitchMode,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const success =
        mode === "signin"
          ? await onLogin(email, password)
          : await onSignup(email, password);

      if (!success) {
        if (mode === "signin") {
          setError("Invalid credentials");
        } else {
          setError("Account with this email already exists");
        }
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative animate-in fade-in-0 zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn size={24} className="text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {mode === "signin"
              ? "Sign in to continue"
              : "Create an account to continue"}
          </h2>
          <p className="text-gray-600">
            {mode === "signin"
              ? "Sign in to access all the features on this app"
              : "Create an account to access all the features on this app"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email or username
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or username"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              required
            />
          </div>

          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Repeat password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your password again"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                required
              />
            </div>
          )}

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          {mode === "signin" ? (
            <>
              Do not have an account?{" "}
              <button
                onClick={() => onSwitchMode("signup")}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => onSwitchMode("signin")}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
