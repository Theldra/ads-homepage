import React, { useEffect, useState } from 'react'
import { apiGetProducts } from '../../services/products';
import { toast } from 'react-toastify';

const Products = () => {
  const products = [Products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await apiGetProducts();
      //   products = [
      //   {name: "Strapless Bra", slug: "1-e" },
      //   {name: "Sneakers", slug: "2-s" },
      //  ];
      console.log("Products:", response.data.data);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };


  useEffect(() => {
    fetchData()
  })
  console.log(products)

  return <div>Products</div>;
};

export default Products;