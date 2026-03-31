import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-xl shadow-sm">
      <h2 className="font-bold text-lg mb-1">{product.icon} {product.name}</h2>
      <p className="text-sm mb-2">{product.description}</p>
      <p className="font-semibold">${product.price} / {product.period}</p>
      <ul className="text-sm list-disc list-inside mb-3">
        {product.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          addToCart(product);
          toast.success("Added to cart!");
        }}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
