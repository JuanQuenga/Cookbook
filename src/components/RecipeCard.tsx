"use client";

import { Recipe } from "@/types/recipe";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat } from "lucide-react";
import Link from "next/link";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const getDifficultyColor = (difficulty: Recipe["difficulty"]) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{recipe.title}</CardTitle>
            {recipe.description && (
              <CardDescription className="line-clamp-2">
                {recipe.description}
              </CardDescription>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="outline">{recipe.category}</Badge>
          <Badge className={getDifficultyColor(recipe.difficulty)}>
            <ChefHat className="w-3 h-3 mr-1" />
            {recipe.difficulty}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {recipe.totalTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{recipe.totalTime}</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{recipe.servings} servings</span>
              </div>
            )}
          </div>

          {recipe.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {recipe.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {recipe.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{recipe.tags.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
