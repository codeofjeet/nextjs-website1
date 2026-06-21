import ProductList from "@/app/componets/productList/ProductList";

export default async function ProductServer() {
  const response = await fetch("https://dummyjson.com/products");

  const result = await response.json();

  return (
    <div>
      <ProductList data={result.products} />
    </div>
  );
}
