"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Invalid email format";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="py-10 md:py-20 px-3 xl:px-[8rem] w-full flex flex-col md:flex-row gap-10">
      <div className="w-full flex flex-col md:pt-48">
        <h1 className="text-black font-black text-[s2rem] xl:text-[3rem]">{`Let's Chat.`}</h1>
        <p className="text-black font-semibold">ONE CLICK AND BE WITH US</p>
      </div>
      <div className="w-full">
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <form onSubmit={handleSubmit} className="mt-10 space-y-3 mb-20">
          <div>
            <label htmlFor="name" className="text-titleMedium font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 mt-1 w-full border-custom-neutral90 focus:border-custom-neutral20 rounded-xl h-12 px-4"
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="text-titleMedium font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 mt-1 w-full border-custom-neutral90 focus:border-custom-neutral20 rounded-xl h-12 px-4"
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="subject" className="text-titleMedium font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border-2 mt-1 w-full border-custom-neutral90 focus:border-custom-neutral20 rounded-xl h-12 px-4"
            />
            {errors.subject && (
              <span style={{ color: "red" }}>{errors.subject}</span>
            )}
          </div>
          <div>
            <label htmlFor="message" className="text-titleMedium font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-2 w-full py-2 mt-1 border-custom-neutral90 focus:border-custom-neutral20 rounded-xl h-24 px-4"
            />
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-custom-primary hover:bg-[#b20779] text-white font-semibold px-6 py-3 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
