import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi"; // Import a mail icon from react-icons
import { ClipLoader } from "react-spinners"; // Import the spinner
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import success and error icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

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
    setSubmissionStatus(null);

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
          setSubmissionStatus("success");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          // Clear success message after 2 seconds
          setTimeout(() => {
            setSubmissionStatus(null);
          }, 2000);
        } else {
          setSubmissionStatus("error");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setSubmissionStatus("error");
      });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 lg:mt-0 mt-[1200px]">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -{" "}
            <a className="text-pink-700" href="mailto:lucatoney23@gmail.com">lucatoney23@gmail.com</a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 mb-4"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="bg-[#ccd6f6] p-2 mb-4"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 mb-4"
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 lg:hover:bg-pink-600 border-pink-700 px-4 py-3 my-4 mx-auto flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader size={20} color="#fff" />
          ) : submissionStatus === "success" ? (
            <FaCheckCircle size={20} color="#34D399" />
          ) : submissionStatus === "error" ? (
            <FaTimesCircle size={20} color="#EF4444" />
          ) : (
            "Let's Collaborate"
          )}
        </button>
        {submissionStatus === "success" && (
          <p className="text-green-500 mt-4 flex items-center">
            <FaCheckCircle className="mr-2" /> Message sent successfully!
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="text-red-500 mt-4 flex items-center">
            <FaTimesCircle className="mr-2" /> Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
