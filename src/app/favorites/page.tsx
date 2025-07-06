"use client";

import { useState, useEffect } from "react";
import { recipes } from "@/data/recipes";
import { RecipeGrid } from "@/components/RecipeGrid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, BookOpen } from "lucide-react";
import Link from "next/link";

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    recipes.filter((r) => favoriteIds.includes(r.id))
  );

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteRecipes");
    if (savedFavorites) {
      const ids = JSON.parse(savedFavorites);
      setFavoriteIds(ids);
      setFavoriteRecipes(recipes.filter((r) => ids.includes(r.id)));
    }
  }, []);

  // Update favorites when favoriteIds changes
  useEffect(() => {
    setFavoriteRecipes(recipes.filter((r) => favoriteIds.includes(r.id)));
  }, [favoriteIds]);

  const clearFavorites = () => {
    setFavoriteIds([]);
    localStorage.removeItem("favoriteRecipes");
  };

  if (favoriteRecipes.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-gray-300" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              No Favorite Recipes Yet
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Start exploring our recipe collection and add your favorites to
              see them here.
            </p>
            <Button asChild size="lg">
              <Link href="/recipes">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Recipes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Favorite Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your personal collection of beloved family recipes
          </p>
        </div>

        {/* Stats Card */}
        <Card className="mb-8 max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              {favoriteRecipes.length} Favorite
              {favoriteRecipes.length !== 1 ? "s" : ""}
            </CardTitle>
            <CardDescription>
              Keep track of your most-loved recipes
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              variant="outline"
              onClick={clearFavorites}
              className="w-full"
            >
              Clear All Favorites
            </Button>
          </CardContent>
        </Card>

        {/* Recipe Grid */}
        <RecipeGrid recipes={favoriteRecipes} />
      </div>
    </div>
  );
}
