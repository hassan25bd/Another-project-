import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

const Banner = () => (
  <section className="mb-10 rounded-3xl p-6 shadow-2xl bg-linear-to-r from-purple-600 via-violet-500 to-indigo-500 text-white">
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-sm font-medium bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
          New: AI-Powered Tools Available
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-4 max-w-xl text-slate-100/90">
          Access premium AI tools, design assets, templates, and productivity software—all in one place.
          Start creating faster today.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition">Explore Products</button>
          <button className="border border-white/60 text-white px-6 py-2 rounded-lg font-medium hover:bg-white/20 transition">Watch Demo</button>
        </div>
      </div>
      <div className="h-64 md:h-72 rounded-2xl overflow-hidden ring-1 ring-white/30 backdrop-blur-sm flex items-center justify-center">
        <img src="/assets/banner.png" alt="DigiTools Banner" className="h-full w-full object-cover" />
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="mb-10 bg-white rounded-3xl p-6 shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {[
        { label: "Active Users", value: "50K+", icon: "👥" },
        { label: "Premium Tools", value: "200+", icon: "🛠️" },
        { label: "Rating", value: "4.9", icon: "⭐" },
      ].map((stat) => (
        <article key={stat.label} className="p-6 border bg-purple-200 border-violet-100 rounded-2xl text-center transition hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-3">{stat.icon}</div>
          <h3 className="text-4xl font-bold text-purple-700">{stat.value}</h3>
          <p className="mt-1 text-slate-500">{stat.label}</p>
        </article>
      ))}
    </div>
  </section>
);

const Steps = () => (
  <section className="mb-10 p-6 bg-slate-100 rounded-xl">
    <h2 className="text-3xl font-bold text-center mb-4">Get Started in 3 Steps</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { title: "Create Account", desc: "Sign up in seconds. No credit card required.", icon: "👤" },
        { title: "Choose Products", desc: "Select the tools that fit your needs.", icon: "📦" },
        { title: "Start Creating", desc: "Download and start using immediately.", icon: "🚀" },
      ].map((step, index) => (
        <div key={step.title} className="border rounded-xl bg-white p-6 text-center">
          <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-r from-purple-500 to-violet-500 text-white font-bold">
            {index + 1}
          </div>
          <div className="text-5xl mb-3">{step.icon}</div>
          <p className="font-bold text-lg">{step.title}</p>
          <p className="mt-2 text-slate-600">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Pricing = () => {
  const plans = [
    {
      plan: "Starter",
      subtitle: "Perfect for getting started",
      price: "$0",
      period: "/Month",
      bullets: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      cardClass: "border border-slate-200 bg-white",
      buttonClass: "bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:opacity-90",
    },
    {
      plan: "Pro",
      subtitle: "Best for professionals",
      price: "$29",
      period: "/Month",
      bullets: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      cardClass: "bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-xl border-0",
      buttonClass: "bg-white text-purple-700 hover:bg-slate-100",
      isPopular: true,
    },
    {
      plan: "Enterprise",
      subtitle: "For teams and businesses",
      price: "$99",
      period: "/Month",
      bullets: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      cardClass: "border border-slate-200 bg-white",
      buttonClass: "bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:opacity-90",
    },
  ];

  return (
    <section className="mb-10 py-10 px-4 md:px-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-violet-100">
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Simple, Transparent Pricing</h2>
        <p className="mt-3 text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.plan} className={`relative rounded-2xl p-6 md:p-8 ${plan.cardClass}`}>
            {plan.isPopular && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-300 text-amber-900 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow">Most Popular</span>
            )}
            <h3 className={`text-2xl font-bold ${plan.isPopular ? "text-white" : "text-slate-900"}`}>{plan.plan}</h3>
            <p className={`mt-1 ${plan.isPopular ? "text-slate-200" : "text-slate-500"}`}>{plan.subtitle}</p>
            <div className="mt-4 mb-5 flex items-end gap-2">
              <span className={`text-5xl font-extrabold ${plan.isPopular ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
              <span className={`text-lg ${plan.isPopular ? "text-slate-100" : "text-slate-600"}`}>{plan.period}</span>
            </div>
            <ul className="space-y-2 mb-6 text-sm font-medium">
              {plan.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${plan.isPopular ? "bg-white/30 text-white" : "bg-emerald-100 text-emerald-600"}`}>✔</span>
                  <span className={plan.isPopular ? "text-white" : "text-slate-700"}>{bullet}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-semibold transition ${plan.buttonClass}`}>{plan.buttonText}</button>
          </article>
        ))}
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-16 px-5 bg-linear-to-r from-purple-700 via-violet-600 to-indigo-500 text-white rounded-3xl shadow-2xl border border-white/20">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Ready To Transform Your Workflow?</h2>
      <p className="mt-3 text-sm md:text-base text-violet-100">Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
        <button className="px-6 py-2 rounded-full bg-white text-violet-700 font-semibold hover:bg-slate-100 transition">Explore Products</button>
        <button className="px-6 py-2 rounded-full border border-white text-white font-semibold hover:bg-white/20 transition">View Pricing</button>
      </div>
      <p className="mt-5 text-xs text-violet-100">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-200 py-10">
    <div className="container mx-auto px-4">
      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-extrabold">DigiTools</h3>
          <p className="mt-2 text-slate-400">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Product</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Company</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Resources</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <span>© 2026 DigiTools. All rights reserved.</span>
        <div className="flex items-center gap-3">
          <a className="px-3 py-1 rounded-md border border-slate-700 hover:border-white" href="#">Privacy Policy</a>
          <a className="px-3 py-1 rounded-md border border-slate-700 hover:border-white" href="#">Terms of Service</a>
          <a className="px-3 py-1 rounded-md border border-slate-700 hover:border-white" href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
    toast.info("Product removed from cart");
  };

  const clearCart = () => {
    if (!cart.length) {
      toast.info("Cart is already empty");
      return;
    }
    setCart([]);
    toast.success("Proceed to checkout successful");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar cartCount={cart.length} setView={setView} />
      <main className="container mx-auto px-4 py-6 space-y-8">
        <Banner />
        <Stats />

        <div className="flex items-center justify-center gap-3">
          <button
            className={`px-5 py-2 rounded-lg ${view === "products" ? "bg-purple-600 text-white" : "bg-white border"}`}
            onClick={() => setView("products")}
          >
            Products
          </button>
          <button
            className={`relative px-5 py-2 rounded-lg ${view === "cart" ? "bg-purple-600 text-white" : "bg-white border"}`}
            onClick={() => setView("cart")}
          >
            <span className="inline-flex items-center gap-2">
              <span className="text-lg">🛒</span>
              Cart
            </span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-300 text-black text-xs font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {view === "products" ? (
          <Products products={productsData} addToCart={addToCart} />
        ) : (
          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        )}

        <Steps />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}

export default App;

