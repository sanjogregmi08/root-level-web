"use client";
import React, { useState } from "react";

const InputFieldSection = () => {
  const inputData = [
    {
      label: "First Name",
      name: "firstname",
      type: "text",
      required: true,
      placeholder: "Enter your first name",
    },
    {
      label: "Last Name",
      name: "lastname",
      type: "text",
      required: true,
      placeholder: "Enter your Last name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      required: true,
      placeholder: "Enter your phone number",
    },
    {
      label: "Resume/CV",
      name: "resume",
      type: "file",
      required: true,
      accept: ".pdf,.doc,.docx,.txt,.rft",
    },
    {
      label: "Portfolio or Website",
      name: "Portfolio",
      type: "textarea",
      placeholder: "Please include your portfolio or other useful resources",
    },
  ];

  const initialFormData = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    Portfolio: "",
    resume: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Application Submitted!");
    setFormData(initialFormData);
  };

  return (
    <div>
      <div className="flex justify-between w-full my-4">
        <div>
          <h1 className="text-2xl md:text-3xl text-orange-600">
            Apply for this job
          </h1>
        </div>
        <div>
          <p>
            Required<span className="text-red-500">*</span>
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {inputData.map((field, index) => (
          <div key={index}>
            <label>
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="mt-1 block w-6/12 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder={field.placeholder}
                rows="4"
                required={field.required}
              ></textarea>
            ) : field.type === "file" ? (
              <input
                type="file"
                name={field.name}
                onChange={handleFileChange}
                className="mt-1 block w-6/12 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                accept={field.accept}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="mt-1 block w-6/12 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
        <div>
          <button
            type="submit"
            className="bg-gray-800 text-white font-medium py-2 px-4 rounded hover:bg-gray-900"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputFieldSection;
