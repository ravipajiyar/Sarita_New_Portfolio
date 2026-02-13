import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // EmailJS credentials
  const SERVICE_ID = "service_posjvc8";
  const TEMPLATE_ID = "template_4fh1s8p";
  const PUBLIC_KEY = "4QT5AsyhqhyUDhp7w";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("=== FORM SUBMISSION STARTED ===");
    console.log("Form data:", form);
    
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    console.log("Loading state set to true");

    try {
      console.log("Sending email with:");
      console.log("- Service ID:", SERVICE_ID);
      console.log("- Template ID:", TEMPLATE_ID);
      console.log("- Public Key:", PUBLIC_KEY);
      console.log("- From Name:", form.name);
      console.log("- From Email:", form.email);
      console.log("- To Email: sarita99444@gmail.com");

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sarita",
          from_email: form.email,
          to_email: "sarita99444@gmail.com",
          message: form.message,
        },
        PUBLIC_KEY
      );

      console.log("✅ Email sent successfully!");
      console.log("Response:", response);
      
      setLoading(false);
      setSent(true);
      alert("✅ Thank you! Your message has been sent successfully to sarita99444@gmail.com. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("❌ Email sending failed!");
      console.error("Error details:", error);
      setLoading(false);
      alert(`❌ Error sending email: ${error.text || error.message || "Unknown error occurred"}`);
    }
  };

  return (
    <div className="relative w-full max-w-[2100px] mx-auto px-4 min-h-screen">
      <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
        {/* Form Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full xl:w-[45%] bg-black-100/80 backdrop-blur-sm p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-lg ${
                sent
                  ? "bg-green-500 shadow-green-500/50 hover:bg-green-600"
                  : loading
                  ? "bg-yellow-500 shadow-yellow-500/50 cursor-not-allowed hover:bg-yellow-600"
                  : "bg-tertiary hover:bg-tertiary/90 shadow-primary hover:shadow-lg"
              }`}
            >
              {sent ? (
                <>
                  <span>✓</span>
                  <span>Sent Successfully!</span>
                </>
              ) : loading ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, linear: true }}
                    style={{ display: "inline-block" }}
                  >
                    ⏳
                  </motion.span>
                  <span>Sending...</span>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>

        {/* Earth Canvas Container */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-[700px] md:h-[550px] h-[350px] relative"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
