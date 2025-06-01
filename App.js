import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <img src="/logo192.png" alt="AI Squad Logo" className="w-10 h-10" />
          <span className="font-bold text-xl">AI Squad</span>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About Us
          </a>
          <a href="#services" className="hover:text-blue-400">
            Services
          </a>
          <a href="#pricing" className="hover:text-blue-400">
            Pricing
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact Us
          </a>
        </div>
        <div className="space-x-2">
          <button className="px-4 py-1 rounded bg-blue-700 hover:bg-blue-600">
            Sign in
          </button>
          <button className="px-4 py-1 rounded bg-blue-700 hover:bg-blue-600">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <div className="px-4 py-1 rounded-full bg-gray-800 text-sm mb-4">
          An All-In-One Platform
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI Squad A Leading AI <br /> Agent Platform
        </h1>
        <p className="max-w-2xl text-gray-400 mb-8">
          AI Squad is a next-generation AI platform, delivering secure,
          customizable, and easy-to-use AI solutions for enterprises. Combining
          comprehensive security features with intuitive user control, AI Squad
          ensures that businesses can leverage cutting-edge AI without
          compromising data integrity, regulatory compliance, or operational
          simplicity.
        </p>
        <button className="px-8 py-3 rounded bg-blue-700 hover:bg-blue-600 text-lg">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default App;
