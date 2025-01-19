import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "../components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import HeroSection from "../components/HeroSection";
import HappyCustomers from "../components/HappyCustomers";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <div>
      <div className="flex flex-col items-center justify-top min-h-screen">
        <HeroSection/>
        <ProductsView products={products} categories={categories}/>
        <HappyCustomers/>
      </div>
    </div>
  );
}
