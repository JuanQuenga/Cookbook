import { notFound } from "next/navigation";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { recipes } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, ArrowLeft, Heart, Share2 } from "lucide-react";
import Link from "next/link";

export default async function RecipePage({
  params,
}: {
  params: { id: string };
}) {
  const { user } = await withAuth({ ensureSignedIn: true });
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  const getDifficultyColor = (difficulty: string) => {
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/recipes" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Recipes
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="mb-4 text-sm text-gray-600">
            Welcome back, {user.email}!
          </div>

          {/* Recipe Header */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{recipe.category}</Badge>
                  <Badge className={getDifficultyColor(recipe.difficulty)}>
                    <ChefHat className="w-3 h-3 mr-1" />
                    {recipe.difficulty}
                  </Badge>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {recipe.title}
                </h1>

                {recipe.description && (
                  <p className="text-lg text-gray-600 mb-6">
                    {recipe.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                  {recipe.totalTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.totalTime}</span>
                    </div>
                  )}
                  {recipe.servings && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  )}
                </div>

                {recipe.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Favorite
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
                <CardDescription>
                  Everything you need to make this recipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
                <CardDescription>
                  Step-by-step cooking instructions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed">{instruction}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          {(recipe.notes || recipe.source) && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recipe.notes && (
                  <div>
                    <h4 className="font-medium mb-2">Notes</h4>
                    <p className="text-sm text-gray-600">{recipe.notes}</p>
                  </div>
                )}
                {recipe.source && (
                  <div>
                    <h4 className="font-medium mb-2">Source</h4>
                    <p className="text-sm text-gray-600">{recipe.source}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Recipe Details */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recipe Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {recipe.prepTime && (
                  <div>
                    <span className="font-medium">Prep Time:</span>
                    <p className="text-gray-600">{recipe.prepTime}</p>
                  </div>
                )}
                {recipe.cookTime && (
                  <div>
                    <span className="font-medium">Cook Time:</span>
                    <p className="text-gray-600">{recipe.cookTime}</p>
                  </div>
                )}
                {recipe.totalTime && (
                  <div>
                    <span className="font-medium">Total Time:</span>
                    <p className="text-gray-600">{recipe.totalTime}</p>
                  </div>
                )}
                {recipe.servings && (
                  <div>
                    <span className="font-medium">Servings:</span>
                    <p className="text-gray-600">{recipe.servings}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
