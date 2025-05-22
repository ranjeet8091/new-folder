
export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-64 flex flex-col items-center hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-green-600 font-bold mt-4">${product.price}</p>
    </div>
  );
}