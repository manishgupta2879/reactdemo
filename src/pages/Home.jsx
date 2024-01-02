import React from 'react'

const Home = () => {
  return (
    <div>
              {/* Navigation */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-semibold">Dashboard</span>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Your Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p>Your content goes here...</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p>Your content goes here...</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p>Your content goes here...</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home