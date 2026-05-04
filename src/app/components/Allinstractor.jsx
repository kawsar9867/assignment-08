import React from "react";

const Allinstractor = async () => {
  let instructors = [];
  try {
    const res = await fetch(
      `https://assignment-08-rose.vercel.app/instractor.json`,
      {
        cache: "no-store",
      },
    );
    const result = await res.json();
    instructors = result;
    console.log(result);
  } catch (error) {
    console.error("Error fetching instructors:", error);
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Meet Our Expert Instructors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto"></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300 -z-0"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full rounded-2xl object-cover ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-sm">
                    ⭐ {instructor.rating}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 text-center">
                  {instructor.name}
                </h3>
                <p className="text-blue-600 text-sm font-semibold mb-3">
                  {instructor.role}
                </p>

                <div className="bg-slate-50 w-full rounded-xl p-3 text-center mb-5">
                  <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">
                    Specialty
                  </span>
                  <span className="text-sm font-bold text-slate-700">
                    {instructor.specialty}
                  </span>
                </div>

                <button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors active:scale-95">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {instructors.length === 0 && (
          <p className="text-center text-gray-500">No instructors found.</p>
        )}
      </div>
    </section>
  );
};

export default Allinstractor;
