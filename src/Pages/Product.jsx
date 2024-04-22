import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';
import { useEffect } from 'react';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  useEffect(() => {
    // Fetch additional data if needed
  }, [productId]);

  return (
    <div>
      {product && <Breadcrums product={product} />} {/* Conditional rendering */}
      <ProductDisplay product={product} />
      <RelatedProduct />
    </div>
  );
};

export default Product;