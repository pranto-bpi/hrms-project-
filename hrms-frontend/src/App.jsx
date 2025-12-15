export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">
      
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl">
          📁 <span>PAYTRACK</span>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Dashboard</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-3">
          <button className="bg-yellow-400 text-black px-4 py-1 rounded font-semibold hover:bg-yellow-500">
            Login
          </button>
          <button className="bg-white text-black px-4 py-1 rounded font-semibold hover:bg-gray-200">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center text-white px-6 h-[calc(100vh-72px)]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Simplify Payroll & HR Management
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90">
          Manage employees, automate salaries, and track attendance effortlessly.
        </p>

        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 shadow-lg">
          Get Started
        </button>
      </section>
    </div>
  );
}
