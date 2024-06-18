// pages/contact.js
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md pt-16">
        <div className="flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="p-4 text-4xl font-bold text-center text-gray-900">Contact Us</h1>
          <p className="p-4 text-center text-gray-600">We'd love to hear from you. Reach out to us using the form below.</p>
        </div>
      </div>
      <div className="max-w-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <form className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-500 ">Name</label>
            <input type="text" className="text-lg p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-500 ">Email</label>
            <input type="email" className="text-lg p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-500 ">Message</label>
            <textarea className="text-lg p-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
