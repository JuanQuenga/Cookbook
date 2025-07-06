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
import { BookOpen, ChefHat, Heart } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  // Get featured recipes (first 6)
  const featuredRecipes = recipes.slice(0, 6);

  // Get stats
  const totalRecipes = recipes.length;
  const categories = [...new Set(recipes.map((r) => r.category))];
  const totalTags = [...new Set(recipes.flatMap((r) => r.tags))].length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-16 w-16 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Family Cookbook
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover and share treasured family recipes passed down through
              generations. From traditional favorites to modern classics, every
              recipe tells a story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/recipes">Browse All Recipes</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/favorites">
                  <Heart className="w-4 h-4 mr-2" />
                  View Favorites
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  {totalRecipes}
                </CardTitle>
                <CardDescription>Total Recipes</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <ChefHat className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  {categories.length}
                </CardTitle>
                <CardDescription>Recipe Categories</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  {totalTags}
                </CardTitle>
                <CardDescription>Unique Tags</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Recipes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your culinary journey with these beloved family favorites
            </p>
          </div>

          <RecipeGrid recipes={featuredRecipes} />

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/recipes">View All Recipes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recipe Categories
            </h2>
            <p className="text-lg text-gray-600">
              Find exactly what you&apos;re looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const categoryRecipes = recipes.filter(
                (r) => r.category === category
              );
              return (
                <Card
                  key={category}
                  className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {categoryRecipes.length}
                    </div>
                    <div className="text-sm text-gray-600">{category}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
