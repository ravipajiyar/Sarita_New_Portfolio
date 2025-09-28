import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sarita's AI assistant. Ask me anything about her background, skills, projects, or experience!",
      isBot: true
    }
  ]);
  const messagesEndRef = useRef(null);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Education related queries
    if (message.includes('education') || message.includes('study') || message.includes('university')) {
      return "Sarita is a recent graduate from Kathmandu University with a B.E. in Civil Engineering (2021-2025). She specialized in Hydropower and is passionate about structural engineering and technology-driven monitoring.";
    }

    // Experience related queries
    if (message.includes('experience') || message.includes('work')) {
      return "Sarita has diverse experience including: \n1. Research in SHM at Kathmandu University (Apr-Jul 2025)\n2. Internship at TODA Corporation, Japan (Jun-Aug 2025)\n3. Internship at Kabeli A Hydropower Project (Feb-Apr 2025)\n4. Media Head at KU Youth Red Cross Circle (Nov 2024-Apr 2025)";
    }

    // Skills related queries
    if (message.includes('skill') || message.includes('expertise') || message.includes('tools')) {
      return "Sarita is skilled in:\n• AutoCAD and Civil 3D (95%)\n• HEC-RAS and EPANET\n• Structural Analysis\n• Hydraulic Engineering\n• Project Management\n• GIS and Surveying";
    }

    // Project related queries
    if (message.includes('project') || message.includes('portfolio')) {
      return "Some of Sarita's key projects include:\n1. Sunkoshi Hydropower RUM Optimization\n2. Mars Nepal Road Design using SW-Road\n3. Punyamata River Flow Analysis\n4. Footings Demonstrative Model\n5. Trishuli Hydropower Topography Model";
    }

    // Contact related queries
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return "You can contact Sarita through:\nEmail: sarita99444@gmail.com\nLinkedIn: linkedin.com/in/sarita-sapkota-80683b332\nOr use the contact form on her portfolio website.";
    }

    // Certification related queries
    if (message.includes('certification') || message.includes('certificate')) {
      return "Sarita holds several certifications including:\n• TODA Corporation Internship Certificate\n• Kabeli A Hydropower Project Certification\n• Going Places with Spatial Analysis (Esri)\n• AutoCAD 2D & 3D Certifications\n• Python Certifications from DataCamp";
    }

    // Research related queries
    if (message.includes('research')) {
      return "Sarita conducted research on Multi Scale Deep Learning for Hairline Crack Detection at Kathmandu University, working under Prof. Dr. Sudan Jha's supervision. The research focused on developing a hybrid CNN-Transformer model for structural health monitoring.";
    }

    // Default response
    return "I can tell you about Sarita's education, experience, skills, projects, certifications, or how to contact her. What would you like to know?";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-[#915EFF] text-white p-4 rounded-full shadow-lg hover:bg-[#7140d1] transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-20 right-5 w-96 h-[500px] bg-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden z-40 ${!isOpen && 'pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-[#915EFF] p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-medium">Ask about Sarita</h3>
              <p className="text-white/70 text-sm">AI Assistant</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="p-4 h-[380px] overflow-y-auto custom-scrollbar space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-2xl ${
                message.isBot 
                  ? 'bg-[#2A2A2A] text-white rounded-tl-none' 
                  : 'bg-[#915EFF] text-white rounded-tr-none'
              }`}>
                {message.text}
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#2A2A2A]">
          <form className="flex space-x-2" onSubmit={(e) => {
            e.preventDefault();
            const input = e.target.elements.message;
            if (input.value.trim()) {
              const userMessage = input.value;
              const botResponse = getBotResponse(userMessage);
              setMessages(prev => [...prev, 
                { text: userMessage, isBot: false },
                { text: botResponse, isBot: true }
              ]);
              input.value = '';
            }
          }}>
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className="flex-1 bg-[#1A1A1A] text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
            />
            <button
              type="submit"
              className="bg-[#915EFF] text-white p-2 rounded-full hover:bg-[#7140d1] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ChatBot;
