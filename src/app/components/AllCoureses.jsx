"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const res = await fetch("http://localhost:3000/api.json", {
  //       cache: "no-store",
  //     });
  //     const data = await res.json();
  //     setLoading(false);

  //     setCourses(data);
  //   };

  //   fetchCourses();
  // }, []);

  const filteredCourses = courses.filter((course) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      course.title.toLowerCase().includes(searchLower) ||
      course.instructor.toLowerCase().includes(searchLower) ||
      course.category.toLowerCase().includes(searchLower)
    );
  });

  if (loading) {
    return (
      <div className="text-center py-20 font-bold">Loading Courses...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 animate__animated animate__fadeInLeft">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <h1 className="text-4xl font-bold text-slate-800 flex items-center gap-2 animate__animated animate__fadeInLeft">
          All Courses <span className="text-2xl">🔥</span>
        </h1>

        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search by title, instructor or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-5 pr-12 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm text-slate-700"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {filteredCourses.length === 0 ?
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg italic">{searchTerm}</p>
        </div>
      : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img
                  src={course.course_img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {course.category}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                      course.level === "Beginner" ?
                        "border-green-200 text-green-600 bg-green-50"
                      : "border-orange-200 text-orange-600 bg-orange-50"
                    }`}
                  >
                    {course.level}
                  </span>
                  <span className="text-xs text-orange-500 font-bold">
                    ⭐ {course.rating}
                  </span>
                </div>

                <h2 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2 h-14">
                  {course.title}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <p className="text-sm text-gray-600">
                    👨‍🏫 {course.instructor}
                  </p>
                </div>

                <p className="text-xs text-gray-500 mb-4 font-medium">
                  ⏱️ {course.duration}
                </p>

                <div className="mt-auto flex justify-between items-center border-t pt-4">
                  <span className="font-bold text-xl text-slate-900">
                    {course.price ? `$${course.price}` : "Free"}
                  </span>

                  <Link href={`/courses/${course._id}`}>
                    <button className="bg-slate-900 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl transition-all text-sm font-semibold active:scale-95 shadow-md">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default AllCourses;
