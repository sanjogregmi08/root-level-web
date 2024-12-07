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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LuArrowUpRight } from "react-icons/lu";

const GetInTouchModal = ({ title, type }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("https://mail-last.vercel.app/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.code === 200) {
            toast.success("Message sent successfully!");
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
            setErrors({});
            setIsOpen(false); // Close the modal on successful submission
            setIsSubmitting(false);
          } else {
            throw new Error(data.status || "Failed to send the message.");
          }
        } else {
          throw new Error("Failed to send the message.");
        }
      } catch (error) {
        toast.error("Error sending message. Please try again.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer"
          >
            {type === "link" ? (
              <div className="flex items-center gap-1 group">
                <span className="relative font-medium text-custom-neutral20">
                  Send Inquiry
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-custom-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </span>
                <LuArrowUpRight className="w-4 h-4" />
              </div>
            ) : (
              <button className="bg-custom-primary hover:bg-custom-primary text-white px-4 py-1.5 transition-all duration-200 rounded-lg flex gap-2 items-center">
                Get In Touch
                <span
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isHovered ? "w-5" : "w-0"
                  }`}
                >
                  <SlCallOut className="w-4 h-4" />
                </span>
              </button>
            )}
          </div>
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
                  disabled={isSubmitting}
                  className="bg-custom-primary text-white rounded-xl hover:bg-black font-semibold px-8 py-2 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <AiOutlineLoading3Quarters className="text-xl animate-spin" />
                  ) : (
                    "Submit"
                  )}
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
