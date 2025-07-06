# Family Cookbook

A beautiful, modern family cookbook website built with Next.js, React, Tailwind CSS, and shadcn/ui. This project showcases a collection of family recipes in an elegant, user-friendly interface.

## Features

- 🍳 **Recipe Collection**: Browse through a curated collection of family recipes
- 🔍 **Advanced Search**: Search recipes by title, description, ingredients, or tags
- 🏷️ **Smart Filtering**: Filter by category, difficulty level, and tags
- ❤️ **Favorites**: Save your favorite recipes for quick access
- 📱 **Responsive Design**: Beautiful design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎨 **Modern UI**: Clean, accessible interface using shadcn/ui components

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd family-cookbook
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── recipes/           # Recipe pages
│   │   ├── page.tsx       # All recipes page
│   │   └── [id]/          # Individual recipe pages
│   ├── favorites/         # Favorites page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   ├── RecipeCard.tsx    # Recipe card component
│   ├── RecipeGrid.tsx    # Recipe grid layout
│   └── SearchAndFilter.tsx # Search and filter component
├── data/                 # Static data
│   └── recipes.ts        # Recipe data
├── types/                # TypeScript types
│   └── recipe.ts         # Recipe type definitions
└── lib/                  # Utility functions
    └── utils.ts          # Common utilities
```

## Recipe Data Structure

Each recipe includes:

- **Basic Info**: Title, description, category, difficulty
- **Timing**: Prep time, cook time, total time
- **Details**: Servings, ingredients, instructions
- **Metadata**: Tags, source, notes, creation dates

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Recipes

1. Edit `src/data/recipes.ts`
2. Add new recipe objects following the Recipe interface
3. Recipes will automatically appear in the website

### Styling

- Colors and design tokens are defined in `src/app/globals.css`
- Component styles use Tailwind CSS classes
- shadcn/ui components can be customized in their respective files

### Components

- UI components are in `src/components/ui/`
- Custom components are in `src/components/`
- All components use TypeScript for type safety

## Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- Any platform that supports Node.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Recipe data is based on family recipes and popular cooking resources
- UI components built with shadcn/ui
- Icons from Lucide React
- Built with Next.js and Tailwind CSS
