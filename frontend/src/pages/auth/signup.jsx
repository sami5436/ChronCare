import React, { useState } from "react";
import { ArrowRight, Lock, User } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Logging in with:", username, password, "Remember me:", rememberMe);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-xl mt-32 mb-32 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to <span className="text-blue-400">CrohnCare</span></h1>
          <p className="text-gray-600 mt-2">Sign up to continue your health journey</p>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="mb-6">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your First Name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-blue-400 hover:text-blue-600">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-500 transition duration-300 cursor-pointer"
          >
            Sign In <ArrowRight className="ml-2" size={18} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
           Have an account?{" "}
            <a href="/login" className="text-blue-400 hover:text-blue-600 font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;