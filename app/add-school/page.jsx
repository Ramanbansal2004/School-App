"use client";

import { useForm } from "react-hook-form";
import { useState, useRef } from "react";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Example list of states (you can expand this)
  const states = [
    "Andhra Pradesh",
    "Bihar",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Karnataka",
    "Maharashtra",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Telangana",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key !== "image") {
        formData.append(key, data[key]);
      }
    });

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const res = await fetch("/api/addSchool", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      setMessage(result.message || result.error);
      reset();
      if (fileInputRef.current) fileInputRef.current.value = null;
    } catch (err) {
      setMessage("Error submitting form. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* School Name */}
        <input
          type="text"
          placeholder="School Name"
          {...register("name", { required: true })}
          className="border p-2 rounded"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}

        {/* Address */}
        <input
          type="text"
          placeholder="Address"
          {...register("address", { required: true })}
          className="border p-2 rounded"
        />

        {/* City */}
        <input
          type="text"
          placeholder="City"
          {...register("city", { required: true })}
          className="border p-2 rounded"
        />

        {/* State Dropdown */}
        <select
          {...register("state", { required: true })}
          className="border p-2 rounded"
          defaultValue=""
        >
          <option value="" disabled>
            Select State
          </option>
          {states.map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>
        {errors.state && <p className="text-red-500">State is required</p>}

        {/* Contact */}
        <input
          type="text"
          placeholder="Contact"
          {...register("contact", {
            required: "Contact is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Only digits are allowed",
            },
            minLength: {
              value: 10,
              message: "Contact must be at least 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Contact cannot exceed 10 digits",
            },
          })}
          className="border p-2 rounded"
        />
        {errors.contact && (
          <p className="text-red-500">{errors.contact.message}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
          className="border p-2 rounded"
        />
        {errors.email_id && (
          <p className="text-red-500">Valid email required</p>
        )}

        {/* File Upload */}
        {/* File Upload */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            <svg
              className="w-10 h-10 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5.002 5.002 0 0115 7h1a5 5 0 010 10h-1m-6 4v-4m0 0l-2-2m2 2l2-2"
              />
            </svg>
            <span className="text-gray-600 font-medium">
              Click to upload or drag & drop
            </span>
            <span className="text-xs text-gray-500">
              PNG, JPG, JPEG (max 5MB)
            </span>
          </label>

          <input
            id="image"
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
            className="hidden"
            ref={(e) => {
              register("image", { required: true }).ref(e);
              fileInputRef.current = e;
            }}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                setPreview(URL.createObjectURL(file)); // ✅ show preview
              } else {
                setPreview(null);
              }
            }}
          />

          {errors.image && <p className="text-red-500">Image is required</p>}

          {/* Image Preview */}
          {preview && (
            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-1">Selected Image:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded border"
              />
            </div>
          )}
        </div>

        {/* Submit Button with Spinner */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2 cursor-pointer"
          disabled={loading}
        >
          {loading && (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
