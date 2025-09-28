import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import {styles}  from "../styles";
import { fadeIn, slideIn } from "../utils/motion";
import { services } from "../constants";

const HireMe = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Civil Engineering Design",
    projectDetails: "",
    budget: "$200 - $500"  // Changed default budget range
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Email handling logic here
    setLoading(false);
  };

  return (
    <div id="hireme" className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Let's Build Something Amazing
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="space-y-8"
          >
            {/* Services Section */}
            <motion.div
                 variants={fadeIn("left", "tween", 0.3, 1)}
                className="bg-black-100/90 p-8 rounded-xl"
              >
              <h3 className="text-2xl font-bold text-white mb-6">Services I Offer</h3>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg p-2">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg mb-2">{service.title}</h4>
                      <p className="text-secondary text-sm">
                        {service.title === "Civil Engineering Design" && "Expert AutoCAD and Civil 3D design services for infrastructure projects"}
                        {service.title === "Hydraulic Analysis" && "Comprehensive water flow and flood analysis using industry-standard tools"}
                        {service.title === "Road Design & Planning" && "Sustainable road alignment and transportation infrastructure design"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
           </motion.div>

            {/* Why Work With Me Section */}
            <motion.div
                variants={fadeIn("left", "tween", 0.3, 1)}
               className="bg-black-100/90 p-8 rounded-xl"
              >
              <h3 className="text-2xl font-bold text-white mb-6">Why Work With Me?</h3>
              <div className="space-y-4">
                {[
                  "Proven track record in project delivery",
                  "Expertise in latest engineering tools",
                  "Focus on sustainable solutions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-purple-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>


          {/* Right Section - Contact Form */}
          <motion.div
               variants={fadeIn("up", "tween", 0.2, 1)}
                className="bg-black-100/90 p-8 rounded-xl"
                >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-white">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-tertiary/50 rounded-lg p-4 text-white outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-tertiary/50 rounded-lg p-4 text-white outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Project Type</label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full bg-tertiary/50 rounded-lg p-4 text-white outline-none"
                >
                  <option>Civil Engineering Design</option>
                  <option>Hydraulic Analysis</option>
                  <option>Road Design & Planning</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-white">Project Details</label>
                <textarea
                  name="projectDetails"
                  value={form.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-tertiary/50 rounded-lg p-4 text-white outline-none"
                  placeholder="Describe your project"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Budget Range</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full bg-tertiary/50 rounded-lg p-4 text-white outline-none"
                >
                  <option>$200 - $500</option>
                  <option>$500 - $800</option>
                  <option>$800 - $1,200</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 rounded-lg transition-colors"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default HireMe;