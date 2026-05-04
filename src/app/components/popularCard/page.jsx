import React from "react";
import Link from "next/link";

const PopularPage = async () => {
  const baseUrl = "http://localhost:3000";

  let popularCourses = "";

  try {
    const res = await fetch(`${baseUrl}/api.json`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();
    const allCourses = result;

    const courses = allCourses.filter((c) => c.rating >= 4.7);

    popularCourses = courses.slice(0, 4);
  } catch (error) {
    console.error("Error fetching popular courses:", error);
    return (
      <div className="text-center py-20 text-red-500 font-bold">
        Error loading courses! Please try again later.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold ml-2 mt-12 mb-8 text-slate-800 flex items-center gap-2">
        Popular Courses <span className="text-2xl">🔥</span>
      </h1>

      {popularCourses.length === 0 ?
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No popular courses available right now.
          </p>
        </div>
      : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {popularCourses.map((data) => (
            <div
              key={data._id || data.id}
              className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={data.course_img}
                  alt={data.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase">
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
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    🕒 {data.duration}
                  </span>
                </div>

                <h2 className="font-bold text-lg text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 h-12">
                  {data.title}
                </h2>

                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={data.instructor_img}
                    alt={data.instructor}
                    className="w-8 h-8 rounded-full border border-blue-100"
                  />
                  <p className="text-sm font-medium text-gray-600">
                    {data.instructor}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-slate-900">
                      ${data.price}
                    </span>
                    <div className="flex items-center text-orange-500 text-sm font-bold">
                      ⭐{" "}
                      <span className="ml-1 text-slate-700">{data.rating}</span>
                    </div>
                  </div>

                  <Link href={`/courses/${data._id || data.id}`}>
                    <button className="bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-md">
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

export default PopularPage;
