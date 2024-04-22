import React, { useState, useEffect } from 'react';
import '../RelatedProducts/RelatedProduct.css';
import Item from '../Item/Item';

const RelatedProduct = () => {
    // State to store related products
    const [relatedProducts, setRelatedProducts] = useState([]);

    // Fetch related products when the component mounts
    useEffect(() => {
        fetchRelatedProducts();
    }, []);

    // Function to fetch related products
    const fetchRelatedProducts = async () => {
        try {
            // Make a GET request to fetch all products
            const response = await fetch('https://vicherserver.onrender.com/allproducts');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const data = await response.json();

            // Shuffle the data array to randomize the order
            const shuffledData = shuffleArray(data);

            // Select the first 4 items from the shuffled array
            const selectedProducts = shuffledData.slice(0, 4);

            // Update the state with the selected products
            setRelatedProducts(selectedProducts);
        } catch (error) {
            console.error('Error fetching related products:', error);
        }
    };

    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div className='relatedproduts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {relatedProducts.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProduct;
