import React, { useState } from "react";
import { ArrowRight, Mail, User, MessageSquare } from "lucide-react";

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("Feedback");
  const [subscribeToUpdates, setSubscribeToUpdates] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting contact form:", {
      firstName,
      lastName,
      email,
      type,
      message,
      subscribeToUpdates
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-white mt-36 mb-36 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="First Name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
              Inquiry Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option value="Feedback">Feedback</option>
              <option value="Support">Support</option>
              <option value="Business">Business Inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Please tell us how we can help you..."
              />
            </div>
          </div>

          <div className="flex items-center mt-6">
            <input
              id="subscribe"
              type="checkbox"
              checked={subscribeToUpdates}
              onChange={(e) => setSubscribeToUpdates(e.target.checked)}
              className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300 rounded"
            />
            <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
              Subscribe to our newsletter
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-500 transition duration-300 cursor-pointer mt-6"
          >
            Submit <ArrowRight className="ml-2" size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;