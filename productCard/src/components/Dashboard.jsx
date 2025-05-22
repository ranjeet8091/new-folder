
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Data from "../data.json";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartData,setCart]=useState(Data)


  return (
    <>
     {
      cartData.map((product,index)=>(
          <div key={index}>
               <h1>{product.id}</h1>
               <h1>{product.name}</h1>
          </div>
      ))
     }
     </>
  );
}
