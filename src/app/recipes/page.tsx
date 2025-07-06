import { withAuth } from "@workos-inc/authkit-nextjs";
import { recipes } from "@/data/recipes";
import { RecipeGrid } from "@/components/RecipeGrid";

export default async function RecipesPage() {
  const { user } = await withAuth({ ensureSignedIn: true });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Recipes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome back, {user.email}! Discover our complete collection of
            family recipes.
          </p>
        </div>

        {/* Recipe Grid */}
        <RecipeGrid recipes={recipes} />
      </div>
    </div>
  );
}
