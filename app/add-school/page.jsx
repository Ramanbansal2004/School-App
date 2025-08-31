"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
    if (key !== "image") {
      formData.append(key, data[key]);
    }
  });

  if (data.image && data.image[0]) {
    formData.append("image", data.image[0]);
  }

    const res = await fetch("/api/addSchool", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    setMessage(result.message || result.error);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="School Name"
          {...register("name", { required: true })}
          className="border p-2 rounded"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}

        <input
          type="text"
          placeholder="Address"
          {...register("address", { required: true })}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="City"
          {...register("city", { required: true })}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="State"
          {...register("state", { required: true })}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Contact"
          {...register("contact", { required: true, pattern: /^[0-9]+$/ })}
          className="border p-2 rounded"
        />
        {errors.contact && <p className="text-red-500">Enter valid contact</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
          className="border p-2 rounded"
        />
        {errors.email_id && (
          <p className="text-red-500">Valid email required</p>
        )}

        <input
          type="file"
          accept="image/*"
          {...register("image", { required: true })} 
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
