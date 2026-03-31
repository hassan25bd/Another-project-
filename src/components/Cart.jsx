import { toast } from "react-toastify";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-slate-500">Your cart is empty.</p>;
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Your Cart ({cart.length})</h2>

      <div className="space-y-3">
        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="grid grid-cols-12 gap-2 items-center rounded-lg border p-3">
            <span className="col-span-1 text-2xl">{item.icon}</span>
            <div className="col-span-7">
              <p className="font-semibold">{item.name}</p>
              <p className="text-xs text-slate-500">{item.period} • {item.tag}</p>
            </div>
            <span className="col-span-2 font-bold">${item.price}</span>
            <button
              className="col-span-2 rounded-lg bg-red-500 text-white py-1 px-2"
              onClick={() => {
                removeFromCart(item.id);
                toast.error("Removed from cart");
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between">
        <p className="text-xl font-bold">Total: ${total}</p>
        <button
          className="mt-3 md:mt-0 w-full md:w-auto px-5 py-2 rounded-lg bg-violet-600 text-white"
          onClick={() => {
            clearCart();
            toast.success("Proceed to checkout successful");
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;