function Product({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500">
          Brand: {product.brand}
        </p>

        <p className="text-gray-600 text-sm line-clamp-3">
          {product.description}
        </p>

        <p className="text-lg font-bold text-blue-600">
          ${product.price}
        </p>

        <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;