import { Link } from "react-router";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transform your productivity journey
          </h1>
          <p className="mt-6 text-3xl text-gray-600">
            Mindflow is your personal productivity companion. Built by experts
            in cognitive science and productivity, our platform helps you
            optimize your workflow, enhance focus, and achieve your goals.
          </p>
          <div className="mt-8 space-x-4">
            <Link to={"/assessment"}>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700">
                Start Assessment
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full transform -rotate-6"></div>
          <img
            src="https://images.unsplash.com/3/doctype-hi-res.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JTIyY3JlYXRpdmUlMjB3b3Jrc3BhY2UlMjJ8ZW58MHx8MHx8fDA%3D"
            alt="Productivity visualization"
            className="relative rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
