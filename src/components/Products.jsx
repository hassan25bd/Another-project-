import { useState } from "react";

const Products = ({ products, addToCart }) => {
  const [addedItems, setAddedItems] = useState({});

  const onBuy = (product) => {
    addToCart(product);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1300);
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {products.map((product) => (
        <article key={product.id} className="border rounded-xl bg-white p-5 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">{product.icon}</span>
            <span className="text-xs uppercase font-semibold px-2 py-1 rounded-lg text-white bg-violet-600">
              {product.tag}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-1">{product.name}</h3>
          <p className="text-sm text-slate-600 mb-3">{product.description}</p>
          <div className="mb-3">
            <p className="font-semibold">{product.price}$ {product.period}</p>
            <p className="text-xs text-slate-500">Type: {product.tagType}</p>
          </div>
          <ul className="mb-4 text-sm space-y-1 flex-1">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={`mt-auto px-4 py-2 rounded-lg ${addedItems[product.id] ? "bg-green-500" : "bg-purple-600 hover:bg-purple-700"} text-white`}
            onClick={() => onBuy(product)}
          >
            {addedItems[product.id] ? "Added" : "Buy Now"}
          </button>
        </article>
      ))}
    </div>
  );
};

export default Products;
