import React, { useEffect, useState, lazy, Suspense, useMemo } from "react";
import api from "../api/api";

const ProductImage = lazy(() => import("../components/ProductImage"));

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Memoize the rendered product list to avoid unnecessary re-renders
  const productList = useMemo(() => {
    return products.map((product) => (
      <li key={product.id}>
        <h3>
          {product.name} - ${product.price}
        </h3>
        <Suspense fallback={<p>Loading Image...</p>}>
          {product.images?.map((img, index) => (
            <ProductImage key={index} src={img} alt={product.name} />
          ))}
        </Suspense>
      </li>
    ));
  }, [products]);

  return (
    <div>
      <h2>Product List</h2>
      {loading ? <p>Loading...</p> : <ul>{productList}</ul>}
    </div>
  );
};

export default ProductList;
