"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const PopularPage = () => {
  const baseUrl = "https://assignment-08-rose.vercel.app";

  const [popularCourses, setPopularCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${baseUrl}/api.json`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch");

        const result = await res.json();
        const allCourses = Array.isArray(result) ? result : result.data || [];

        const filtered = allCourses.filter((c) => c.rating >= 4.7).slice(0, 4);

        setPopularCourses(filtered);
      } catch (err) {
        setError("Error loading courses!");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 font-bold">Loading Courses...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500 font-bold">{error}</div>
    );
  }

  return (
    <div className="container mx-auto px-4">
    
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold ml-2 mt-12 mb-8 text-slate-800 flex items-center gap-2"
      >
        Popular Courses <span className="text-2xl">🔥</span>
      </motion.h1>

      {popularCourses.length === 0 ?
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No popular courses available right now.
          </p>
        </div>
      : <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
        >
          {popularCourses.map((data) => (
            <motion.div
              key={data._id || data.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl flex flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={data.course_img || "/fallback.jpg"}
                  alt={data.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {data.category}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                      data.level === "Beginner" ?
                        "border-green-200 text-green-600 bg-green-50"
                      : data.level === "Intermediate" ?
                        "border-yellow-200 text-yellow-600 bg-yellow-50"
                      : "border-red-200 text-red-600 bg-red-50"
                    }`}
                  >
                    {data.level}
                  </span>

                  <span className="text-gray-400 text-xs">
                    🕒 {data.duration}
                  </span>
                </div>

                <h2 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2 h-12 group-hover:text-blue-600">
                  {data.title}
                </h2>

                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={data.instructor_img || "/avatar.png"}
                    alt={data.instructor}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-sm text-gray-600">{data.instructor}</p>
                </div>

                <div className="mt-auto pt-4 border-t flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-slate-900">
                      {data.price ? `$${data.price}` : "Free"}
                    </span>

                    <div className="text-orange-500 text-sm font-bold">
                      ⭐ {data.rating}
                    </div>
                  </div>

                  <Link href={`/courses/${data._id || data.id}`}>
                    <button className="bg-slate-900 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-xl transition active:scale-95">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      }
    </div>
  );
};

export default PopularPage;
