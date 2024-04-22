import React, { useEffect, useState } from 'react';
import '../NewCollections/NewCollection.css';
import Item from '../Item/Item';

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://vicherserver.onrender.com/newcollection")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => setNew_collection(data))
      .catch((error) => {
        console.error("Error fetching new collection:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection && new_collection.map((item) => (
          <Item
            key={item.id}
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

export default NewCollections;

