import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHd from '../components/ProductHd';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/ProductDescription';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { all_products, addToCart } = useContext(ShopContext);
  const { productId } = useParams();

  // Check if all_products is defined and has products
  if (!all_products || all_products.length === 0) {
    return <div>Loading...</div>; // Or a more user-friendly loading indicator
  }

  // Find the product by ID
  const product = all_products.find((e) => e.id === Number(productId));

  // If product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  // Add to cart function
  const handleAddToCart = () => {
    addToCart(product.id);
    alert("Product added to cart!");
  };

  return (
    <div>
      <section className='max_padd_container my-28'>
        <div>
          <ProductHd product={product} />
          
          {/* Ensure the product image is displayed */}
          <ProductDisplay product={product} image={product.image || 'path/to/fallback_image.png'} />
          
          <ProductDescription />

          {/* Add to Cart Button */}
          <button onClick={handleAddToCart} className="btn_dark_rounded">
            Add to Cart
          </button>

          {/* Related Products Section */}
          <RelatedProduct /> 
        </div>
      </section>
    </div>
  );
};

export default Product;
