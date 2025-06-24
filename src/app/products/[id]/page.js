import axios from "axios";

export default async function ProductDetail({ params }) {
  const { id } = params;

  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    const product = res.data;

    return (
      <div className="min-h-screen bg-gray-800 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-gray-400 rounded-xl shadow-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-xl object-cover w-full h-80 md:h-96"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
              
              <p className="text-gray-700 text-lg mb-6">{product.description}</p>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                  Rs {product.price}
                </span>
                <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                  Brand: {product.brand}
                </span>
                <span className="bg-yellow-100 text-yellow-700 text-sm font-medium px-3 py-1 rounded-full">
                  Category: {product.category}
                </span>
              </div>

              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-500 text-xl font-semibold">
        Product not found.
      </div>
    );
  }
}
