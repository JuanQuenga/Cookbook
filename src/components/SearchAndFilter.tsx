"use client";

import { useState } from "react";
import { RecipeCategory, RecipeFilters } from "@/types/recipe";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

interface SearchAndFilterProps {
  onFiltersChange: (filters: RecipeFilters) => void;
  categories: RecipeCategory[];
  tags: string[];
}

export function SearchAndFilter({
  onFiltersChange,
  categories,
  tags,
}: SearchAndFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    RecipeCategory | undefined
  >();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    updateFilters({
      search: value,
      category: selectedCategory,
      tags: selectedTags,
    });
  };

  const handleCategoryChange = (category: RecipeCategory | undefined) => {
    setSelectedCategory(category);
    updateFilters({ search: searchTerm, category, tags: selectedTags });
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    updateFilters({
      search: searchTerm,
      category: selectedCategory,
      tags: newTags,
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(undefined);
    setSelectedTags([]);
    updateFilters({});
  };

  const updateFilters = (filters: RecipeFilters) => {
    onFiltersChange(filters);
  };

  const hasActiveFilters =
    searchTerm || selectedCategory || selectedTags.length > 0;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {
                [searchTerm, selectedCategory, ...selectedTags].filter(Boolean)
                  .length
              }
            </Badge>
          )}
        </Button>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <X className="w-4 h-4" />
            Clear
          </Button>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
          {/* Category Filter */}
          <div>
            <h4 className="font-medium mb-2">Category</h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === undefined ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(undefined)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <h4 className="font-medium mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-blue-600"
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
