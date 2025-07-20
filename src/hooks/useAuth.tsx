"use client";

import { useState, useEffect } from "react";
import type { User } from "../types";

// Mock test accounts - these are always available
const DEFAULT_TEST_ACCOUNTS = [
  { email: "demo@example.com", password: "password123", name: "Demo User" },
  { email: "test@user.com", password: "testpass", name: "Test User" },
];

interface StoredAccount {
  email: string;
  password: string;
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  // Get all registered accounts (default + newly signed up)
  const getAllAccounts = (): StoredAccount[] => {
    const storedAccounts = localStorage.getItem("foo-rum-accounts");
    const registeredAccounts = storedAccounts ? JSON.parse(storedAccounts) : [];
    return [...DEFAULT_TEST_ACCOUNTS, ...registeredAccounts];
  };

  // Save a new account to localStorage
  const saveNewAccount = (email: string, password: string, name: string) => {
    const storedAccounts = localStorage.getItem("foo-rum-accounts");
    const registeredAccounts = storedAccounts ? JSON.parse(storedAccounts) : [];

    // Check if account already exists
    const existingAccount = registeredAccounts.find(
      (acc: StoredAccount) => acc.email === email
    );
    if (!existingAccount) {
      registeredAccounts.push({ email, password, name });
      localStorage.setItem(
        "foo-rum-accounts",
        JSON.stringify(registeredAccounts)
      );
    }
  };

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("foo-rum-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const allAccounts = getAllAccounts();
    const account = allAccounts.find(
      (acc) => acc.email === email && acc.password === password
    );

    if (account) {
      const userData: User = {
        id: account.email,
        name: account.name,
        email: account.email,
      };
      setUser(userData);
      localStorage.setItem("foo-rum-user", JSON.stringify(userData));
      return true;
    }

    return false;
  };

  const signup = async (email: string, password: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user already exists
    const allAccounts = getAllAccounts();
    const existingAccount = allAccounts.find((acc) => acc.email === email);

    if (existingAccount) {
      return false; // Account already exists
    }

    // Create new user account
    const name = email.split("@")[0]; // Use email prefix as default name
    const userData: User = {
      id: email,
      name: name,
      email: email,
    };

    // Save to registered accounts
    saveNewAccount(email, password, name);

    // Log them in immediately
    setUser(userData);
    localStorage.setItem("foo-rum-user", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("foo-rum-user");
  };

  return { user, login, signup, logout };
};
