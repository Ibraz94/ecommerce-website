import ProductsView from "@/app/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductByCategory } from "@/sanity/lib/products/getProductByCategory";
import { notFound } from "next/navigation";


async function CategoryPage({
   params 
  }: { 
    params: Promise<{ 
    slug: string }> 
  }) 
  {
    const { slug } = await params;
    const products = await getProductByCategory(slug);
    const categories = await getAllCategories();

     if (!products) {
           return notFound()
         }

  return (
    <div className="w-screen flex flex-col items-center justify-top min-h-screen p-4">
        <div>
            <h1 className="text-5xl font-bold text-center uppercase">
             {slug 
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join (" ")}{" "}
              COLLECTION
            </h1>
            <ProductsView products={products} categories={categories}/>
        </div>
    </div>
  );
}

export default CategoryPage;


