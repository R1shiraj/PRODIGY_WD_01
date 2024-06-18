// pages/about.js
export default function About() {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-md pt-16">
          <div className="flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="p-4 text-4xl font-bold text-center text-gray-900">About Us</h1>
            <p className="p-4 text-center text-gray-600">Learn more about our mission and values.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
            <p className="mt-2 text-gray-600">We started with a vision to provide the best services possible. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    );
  }
  