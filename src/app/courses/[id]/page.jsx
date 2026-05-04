import React from "react";
import Link from "next/link";

const CourseDetails = async ({ params }) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const res = await fetch("https://assignment-08-rose.vercel.app/api.json");
  const data = await res.json();
  const course = data.find((f) => f.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Course Not Found
          </h1>
          <Link
            href="/course"
            className="text-rose-600 hover:text-rose-700 font-medium"
          >
            ← Back to Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-bold px-4 py-1 rounded-full inline-block">
                {course.category}
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 text-sm font-medium pt-4">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                  <span className="text-yellow-400">⭐</span>
                  <span>{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                  <span className="text-blue-400">⏱️</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                  <span className="text-green-400">📊</span>
                  <span>{course.level}</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={
                  course.course_img ||
                  course.image ||
                  "https://placehold.co/600x400?text=Course+Thumbnail"
                }
                alt={course.title}
                className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 border-b pb-4">
                Course Overview
              </h3>
              <p className="text-gray-600 leading-loose text-lg">
                {course.description}
                <br />
                <br />
                This {course.level} level course is meticulously designed for
                students who want to master {course.category}. Guided by{" "}
                {course.instructor}, you will gain hands-on experience and
                professional insights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Your Instructor
              </h3>
              <div className="flex items-center gap-6">
                <img
                  src={course.instructor_img || "https://i.pravatar.cc/150"}
                  alt={course.instructor}
                  className="w-20 h-20 rounded-2xl object-cover ring-4 ring-gray-50"
                />
                <div>
                  <h4 className="font-bold text-xl text-slate-900">
                    {course.instructor}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    Verified Expert in {course.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-slate-200/50 border border-gray-100 sticky top-10">
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-extrabold text-slate-900">
                  ${course.price}
                </span>
                <span className="text-gray-400 line-through text-lg">
                  ${(course.price + 50).toFixed(2)}
                </span>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95">
                  Enroll Now
                </button>
                <button className="w-full border-2 border-slate-200 hover:bg-slate-50 text-slate-800 font-bold py-4 rounded-xl transition-all">
                  Add to Cart
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
                  Course Features
                </p>
                <ul className="space-y-4">
                  {[
                    "Full lifetime access",
                    "Certificate of completion",
                    "Access on mobile and TV",
                    "Downloadable resources",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700 font-medium"
                    >
                      <span className="bg-green-100 text-green-600 rounded-full p-1 text-xs">
                        ✔
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
