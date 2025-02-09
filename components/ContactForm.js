import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default ContactForm;
