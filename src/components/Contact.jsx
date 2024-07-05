import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Perform form submission using Formspree
    fetch("https://formspree.io/f/xbjnnzve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          toast.error("Failed to send message. Please try again.");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <ToastContainer />
      <form method="post" onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full mx-auto">
        <div className="pb-8 mt-8 sm:mt-0">
          <p className="lg:text-4xl text-2xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-400 py-4 font-medium">
            Submit the form below or shoot me an email -{" "}
            <a className="text-pink-700" href="mailto:lucatoney23@gmail.com">
              lucatoney23@gmail.com
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 mb-4 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="bg-[#ccd6f6] p-2 mb-4 rounded-md"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 mb-4 rounded-md"
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 border-pink-700 px-4 py-3 my-4 mx-auto flex items-center justify-center rounded-md transition-colors duration-300 lg:hover:bg-pink-600"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader size={20} color="#fff" />
          ) : (
            "Let's Collaborate"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
