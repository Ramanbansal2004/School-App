"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">School Management</h1>
        <p className="text-lg mb-8">
          Manage and explore schools easily with our simple app.
        </p>

        <div className="flex gap-6 justify-center">
          <Link
            href="/add-school"
            className="px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold shadow hover:bg-gray-100 transition"
          >
            ➕ Add School
          </Link>

          <Link
            href="/show-school"
            className="px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold shadow hover:bg-gray-100 transition"
          >
            🏫 Show School
          </Link>
        </div>
      </div>
    </div>
  );
}
