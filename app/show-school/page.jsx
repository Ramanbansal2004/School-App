"use client";

import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/getSchools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Schools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {schools.length===0 && <div>No Data to Show</div>}
        {schools.length>0 && schools.map((school) => (
          <div
            key={school.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer"
          >
            <img
                src={school.image}
                alt={school.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
            <h2 className="text-xl font-semibold">{school.name}</h2>
            <p className="text-gray-600">{school.address}</p>
            <p className="text-gray-500">{school.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
