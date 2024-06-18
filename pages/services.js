// pages/services.js
export default function Services() {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-md pt-16">
          <div className="flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="p-4 text-4xl font-bold text-center text-gray-900">Our Services</h1>
            <p className="p-4 text-center text-gray-600">Explore the wide range of services we offer.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Service One</h3>
              <p className="mt-2 text-gray-600">Detailed description of service one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Service Two</h3>
              <p className="mt-2 text-gray-600">Detailed description of service two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Service Three</h3>
              <p className="mt-2 text-gray-600">Detailed description of service three. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  