const Navbar = ({ setView, cartCount }) => {
  return (
    <header className="w-full bg-linear-to-r from-purple-600 via-violet-600 to-fuchsia-600 shadow-lg text-white backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">DigiTools</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <button onClick={() => setView("products")} className="transition hover:text-slate-100">Products</button>
          <button className="transition hover:text-slate-100">Features</button>
          <button className="transition hover:text-slate-100">Pricing</button>
          <button className="transition hover:text-slate-100">Testimonials</button>
          <button className="transition hover:text-slate-100">FAQ</button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setView("cart")}
            aria-label="Open cart"
            className={`relative p-2 rounded-lg text-2xl transition focus:outline-none focus:ring-2 focus:ring-white/60 ${cartCount > 0 ? "bg-white/20 shadow-lg shadow-amber-300/50" : "hover:bg-white/20"}`}>
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[1.3rem] h-5 rounded-full bg-amber-300 text-black text-xs font-bold leading-5 text-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          <button className="text-sm font-medium transition hover:text-slate-100">Login</button>
          <button className="text-sm font-semibold bg-linear-to-r from-purple-500 to-fuchsia-500 text-white px-5 py-2 rounded-xl shadow-xl hover:shadow-2xl transition hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;