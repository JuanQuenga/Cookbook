export interface Recipe {
  id: string;
  title: string;
  description?: string;
  category: RecipeCategory;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  servings?: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
  tags: string[];
  image?: string;
  source?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type RecipeCategory =
  | "Appetizers"
  | "Main Dishes"
  | "Side Dishes"
  | "Desserts"
  | "Breads"
  | "Beverages"
  | "Soups"
  | "Salads"
  | "Breakfast"
  | "Snacks"
  | "Other";

export interface RecipeFilters {
  category?: RecipeCategory;
  difficulty?: Recipe["difficulty"];
  search?: string;
  tags?: string[];
}
