// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md pt-16">
        <div className="flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl p-4 font-bold text-center text-gray-900">Welcome to MyWebsite</h1>
          <p className="text-center p-4 text-gray-600">Discover amazing content and explore our services.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Our Features</h2>
          <p className="mt-2 text-gray-600">We provide a wide range of services to meet your needs.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Feature One</h3>
            <p className="mt-2 text-gray-600">Description of feature one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Feature Two</h3>
            <p className="mt-2 text-gray-600">Description of feature two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Feature Three</h3>
            <p className="mt-2 text-gray-600">Description of feature three. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
