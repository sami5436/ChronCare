import React from "react";
import { Heart, Code, Users, MessageCircle } from "lucide-react";

function aboutus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:px-0 mt-10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Our <span className="text-blue-400">Mission</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're on a mission to empower individuals with Crohn's disease to take control of their health journey through technology and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-blue-100 w-48 h-48 rounded-full mx-auto flex items-center justify-center">
                <span className="text-blue-600 text-4xl font-bold">SH</span>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Founder's Story</h2>
              <p className="text-gray-700 mb-4">
                I'm Sami Hamdalla, a junior at the University of Houston majoring in Computer Science. My passion lies in building technology that makes a meaningful impact on people's lives.
              </p>
              <p className="text-gray-700 mb-4">
                This project is deeply personal to me. My brother has been living with Crohn's disease, and I've witnessed firsthand the challenges of managing this condition. Watching him navigate the unpredictable nature of Crohn's inspired me to create CrohnCare.
              </p>
              <p className="text-gray-700">
                What started as a tool to help my brother has grown into a platform that serves the broader Crohn's community. By combining my technical skills with this personal connection, I'm committed to developing solutions that truly understand and address the needs of Crohn's patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About CrohnCare Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About CrohnCare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CrohnCare is more than just an app—it's a comprehensive health companion designed specifically for individuals living with Crohn's disease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Patient-Centered Approach</h3>
              <p className="text-gray-600">
                Built by someone with a personal connection to Crohn's, our platform puts the unique needs of patients first. We understand the day-to-day challenges and have designed features that address real pain points.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technology With Purpose</h3>
              <p className="text-gray-600">
                We leverage advanced AI and data analysis to uncover patterns and insights that might otherwise go unnoticed. Our technology transforms daily symptom logging into actionable intelligence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Focus</h3>
              <p className="text-gray-600">
                While each person's journey with Crohn's is unique, there's strength in shared experiences. CrohnCare helps you benefit from collective insights while maintaining your privacy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                We're constantly learning and evolving. User feedback shapes our development roadmap, ensuring CrohnCare grows to meet the changing needs of the Crohn's community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
            <p className="text-gray-700 text-lg text-center italic">
              "We envision a world where people with Crohn's disease are empowered with the tools and insights they need to live their fullest lives, where data transforms into understanding, and where technology bridges the gap between patients and better health outcomes."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 text-gray-800">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're living with Crohn's yourself or supporting someone who is, we invite you to be part of the CrohnCare community.
          </p>
          <button className="bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default aboutus;