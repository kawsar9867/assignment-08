import React from "react";

const InstractorPage = async () => {
  const res = await fetch(
    "https://assignment-08-rose.vercel.app/instractor.json",
  );
  const instractor = await res.json();
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 flex justify-center mt-10">
        Top Instructors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {instractor.map((person) => (
          <div
            key={person.id}
            className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="flex items-center w-full gap-4 mb-6 text-left">
              <div className="relative w-16 h-16 shrink-0">
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-full object-cover bg-slate-200"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg leading-tight">
                  {person.name}
                </h3>
                <div className="flex items-center gap-1 mt-1 bg-blue-50 px-2 py-0.5 rounded-md w-fit">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">
                    {person.role}, {person.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-slate-500 text-sm">
                  <span>{person.specialty}</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-auto bg-[#0F172A] hover:bg-slate-800 text-white py-2 rounded-xl font-semibold transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstractorPage;
