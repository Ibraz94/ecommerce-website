import { Product, Category } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import { CategorySelectorComponent } from "./ui/category-selector";



interface ProductsViewProps {
    products: Product[]
    categories: Category[];

}


const ProductsView = ({ products, categories }: ProductsViewProps) => {
    return (
    
     <div className="flex flex-col space-y-5 p-20">
         <div className="w-full sm:w-[200px]">
            <CategorySelectorComponent categories={categories}/>
         </div>
       <div className="flex-1">
          <div>
           <ProductGrid products={products}/>
          </div>   
        </div>
     </div>
  )
};

export default ProductsView;