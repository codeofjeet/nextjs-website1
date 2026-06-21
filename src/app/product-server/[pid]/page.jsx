export default async function ProductDetails({ params }) {
  const { pid } = await params;

  const response = await fetch(`https://dummyjson.com/products/${pid}`);

  const product = await response.json();

  return (
    <div className="max-w-6xl mx-auto p-5">
      <img src={product.thumbnail} alt={product.title} width="300" />

      <h1 className="text-4xl font-bold py-4">{product.title}</h1>

      <p>{product.description}</p>

      <h2 className="text-2xl py-3">Price: ${product.price}</h2>

      <h2>Category: {product.category}</h2>

      <h2>Rating: {product.rating}</h2>
    </div>
  );
}
