import React from "react";
import { ArrowRight, Activity, Calendar, BarChart, Shield } from "lucide-react";

function landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      <section className="pt-28 pb-16 px-4 md:px-0 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Take Control of Your <span className="text-blue-400">Crohn's Journey</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Track your symptoms, identify patterns, and gain insights with our AI-powered health companion designed specifically for Crohn's patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition duration-300 cursor-pointer">
                Get Started <ArrowRight className="ml-2" size={18} />
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          {/* <div className="md:w-1/2">
            <img 
              src="/api/placeholder/600/450" 
              alt="CrohnCare Dashboard Preview" 
              className="rounded-xl shadow-2xl"
            />
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How CrohnCare Helps You</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our comprehensive suite of tools gives you everything you need to better understand and manage your Crohn's disease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Activity className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Symptom Tracking</h3>
              <p className="text-gray-600">
                Log your symptoms easily and quickly to build a comprehensive health diary.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pattern Analysis</h3>
              <p className="text-gray-600">
                Our AI identifies connections between your diet, stress, and symptoms.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Treatment Tracking</h3>
              <p className="text-gray-600">
                Keep track of medications, appointments, and treatment effectiveness.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Private & Secure</h3>
              <p className="text-gray-600">
                Your health data is encrypted and protected with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John D.</h4>
                  <p className="text-sm text-gray-500">Living with Crohn's for 8 years</p>
                </div>
              </div>
              <p className="text-gray-700">
                "CrohnCare has been a game-changer. I've identified several food triggers I wasn't aware of, and my flare-ups have decreased significantly."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">SL</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah L.</h4>
                  <p className="text-sm text-gray-500">Recently diagnosed</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As someone new to Crohn's, this app helped me understand my condition better. The insights have been invaluable for discussions with my doctor."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">MR</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael R.</h4>
                  <p className="text-sm text-gray-500">Crohn's patient for 15+ years</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I've tried many tracking apps, but CrohnCare's pattern recognition is on another level. I feel more in control of my health than ever before."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 text-gray-800">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Crohn's?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who are managing their Crohn's disease more effectively with CrohnCare.
          </p>
          <button className="bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
            Sign Up for Free
          </button>
        </div>
      </section>

    </div>
  );
}

export default landing;

