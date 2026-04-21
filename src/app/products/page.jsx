import ProductCart from "@/ui/ProductCart";
import React from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: { revalidate: 30 },
  });
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <p>Products: {products.length}</p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
