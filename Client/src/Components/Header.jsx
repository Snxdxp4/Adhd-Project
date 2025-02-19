
function Header() {
  return (
    <nav className="flex max-w-7xl mx-auto items-center justify-between p-6">
    <div className="flex items-center">
      <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-2 text-xl font-semibold">Mindflow</span>
    </div>

    <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
      Get Started
    </button>
  </nav>
  )
}

export default Header