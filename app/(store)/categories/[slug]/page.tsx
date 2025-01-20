import ProductsView from "@/app/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductByCategory } from "@/sanity/lib/products/getProductByCategory";

async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch data
  const products = await getProductByCategory(slug);
  const categories = await getAllCategories();

  // Handle invalid data
  if (!products || products.length === 0) {
    return (
      <div className="w-full flex items-center justify-center min-h-screen">
        <p>No products found for this category.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen p-4">
      <div>
        <h1 className="text-5xl font-bold text-center uppercase">
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          Collection
        </h1>
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}

export default CategoryPage;
