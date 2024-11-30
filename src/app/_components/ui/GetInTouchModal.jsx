"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SlCallOut } from "react-icons/sl";

const GetInTouchModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to control modal open/close
  const [isHovered, setIsHovered] = useState(false);

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
      setIsOpen(false); // Close the modal on successful submission
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            onClick={() => setIsOpen(true)} // Open the modal
            className="bg-custom-primary hover:bg-custom-primary text-white px-4 py-1.5 transition-all duration-200 rounded-lg flex gap-2 items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get In Touch
            <span
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isHovered ? "w-5" : "w-0"
              }`}
            >
              <SlCallOut className="w-4 h-4" />
            </span>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get In Touch</DialogTitle>
            <DialogDescription asChild>
              <form onSubmit={handleSubmit} className="pt-5 space-y-3 mb-20">
                <div>
                  <label
                    htmlFor="name"
                    className="text-titleMedium font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    className="border mt-1 w-full border-[#ecf4f8] focus:border-custom-neutral20 rounded-xl h-12 px-4"
                  />
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-titleMedium font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    className="border mt-1 w-full border-[#ecf4f8] focus:border-custom-neutral20 rounded-xl h-12 px-4"
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-titleMedium font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                    className="border mt-1 w-full border-[#ecf4f8] focus:border-custom-neutral20 rounded-xl h-12 px-4"
                  />
                  {errors.subject && (
                    <span style={{ color: "red" }}>{errors.subject}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-titleMedium font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                    className="border w-full py-2 mt-1 border-[#ecf4f8] focus:border-custom-neutral20 rounded-xl h-24 px-4"
                  />
                  {errors.message && (
                    <span style={{ color: "red" }}>{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-custom-primary text-white rounded-xl hover:bg-black font-semibold px-8 py-2 transition-all duration-200"
                >
                  Submit
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GetInTouchModal;
