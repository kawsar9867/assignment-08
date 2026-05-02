
import Image from 'next/image';
import React from 'react';

const LearningPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold flex items-center gap-2 mb-8 text-slate-800 flex justify-center font-semibold">
         Learning Tips & Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 z-0">
            <Image
              src="/book.png" 
              alt="Study Techniques"
              fill
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="relative z-10 p-8 sm:p-10 flex flex-col items-start justify-center min-h-[300px] bg-gradient-to-r from-white/80 via-white/40 to-transparent">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Study techniques
            </h3>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><span>•</span> Active Recall</li>
              <li className="flex items-center gap-2"><span>•</span> Spaced Repetition</li>
              <li className="flex items-center gap-2"><span>•</span> Mind Mapping</li>
            </ul>
            <button className="mt-6 bg-slate-900 hover:bg-black text-white px-6 py-2 rounded-xl font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 z-0">
            <Image
              src="/time.png" 
              alt="Time Management"
              fill
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="relative z-10 p-8 sm:p-10 flex flex-col items-start justify-center min-h-[300px] bg-gradient-to-r from-white/80 via-white/40 to-transparent">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Time management tips
            </h3>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><span>•</span> Pomodoro Technique</li>
              <li className="flex items-center gap-2"><span>•</span> Prioritization (Eisenhower Matrix)</li>
              <li className="flex items-center gap-2"><span>•</span> Time Blocking</li>
            </ul>
            <button className="mt-6 bg-slate-900 hover:bg-black text-white px-6 py-2 rounded-xl font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;