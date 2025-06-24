'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-orange-300 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Dummy Product List</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((p) => (
            <Link href={`/products/${p.id}`} key={p.id}>
              <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <p className="text-gray-700">Rs {p.price}</p>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-3 text-center">
                  <span className="inline-block bg-orange-500 text-white py-1.5 px-4 rounded hover:bg-blue-700">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
