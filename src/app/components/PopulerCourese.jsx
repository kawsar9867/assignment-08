import React from "react";
import Link from "next/link";

const PopulerCourese = async () => {
  let popularCourses = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/courses`, {
      cache: "no-store",
    });

    if (res.ok) {
      const result = await res.json();

      popularCourses = result.data
        .filter((course) => course.rating >= 4.8)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
    }
  } catch (error) {
    console.error("Popular courses fetch error:", error);
  }

  if (popularCourses.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Popular Courses 🌟
            </h2>
            <p className="text-gray-500">
              Best Rating Couses!
            </p>
          </div>
          <Link
            href="/courses"
            className="text-blue-600 font-semibold hover:underline hidden md:block"
          >
            See All Courses →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCourses.map((course) => (
            <div
              key={course._id}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="relative h-44">
                <img
                  src={course.course_img || course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                  ⭐ {course.rating}
                </div>
              </div>

              <div className="p-4">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {course.category}
                </span>
                <h3 className="font-bold text-slate-800 mt-1 mb-3 line-clamp-1">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                  <span className="font-bold text-lg text-slate-900">
                    ${course.price}
                  </span>
                  <Link href={`/courses/${course._id}`}>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopulerCourese;
