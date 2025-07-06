"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Home,
  Search,
  Heart,
  LogIn,
  LogOut,
  User,
} from "lucide-react";
import { useAuth } from "@workos-inc/authkit-nextjs/components";

export function Header() {
  const { user, signOut } = useAuth();

  const handleSignIn = async () => {
    window.location.href = "/login";
  };

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Family Cookbook</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="flex items-center space-x-2 text-sm font-medium hover:text-blue-600 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/recipes"
              className="flex items-center space-x-2 text-sm font-medium hover:text-blue-600 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>All Recipes</span>
            </Link>
            <Link
              href="/favorites"
              className="flex items-center space-x-2 text-sm font-medium hover:text-blue-600 transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Favorites</span>
            </Link>
          </nav>

          {/* Auth Controls */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2 text-sm">
                  <User className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut()}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleSignIn}
                className="flex items-center space-x-2"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button variant="outline" size="sm" className="md:hidden">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
