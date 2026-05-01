import React from 'react';

const DetailsPage = async () => {
 const resolvedParams = await params; 
  const id = resolvedParams.id;
  
  let course = null;
  try {
    const res = await fetch("http://localhost:3000/api.json", {
      cache: 'no-store'
    });
    const allCourses = await res.json();
    
    course = allCourses.find((item) => item.id.toString() === id);
  } catch (error) {
    console.error("Error fetching course details:", error);
  }
 
  if (!course) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Course Not Found!</h1>
        <p className="text-gray-500">The course you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
      
        <div className="w-full lg:w-2/3">
          <img 
            src={course.course_img} 
            alt={course.title} 
            className="w-full h-[450px] object-cover rounded-3xl shadow-2xl mb-8"
          />
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {course.category}
            </span>
            <span className="text-slate-500 font-semibold border-l pl-3">
              Level: {course.level}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {course.title}
          </h1>

          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl mb-8">
            <img src={course.instructor_img} alt={course.instructor} className="w-14 h-14 rounded-full border-2 border-white shadow-sm" />
            <div>
              <p className="text-sm text-slate-500 uppercase font-bold tracking-tighter">Instructor</p>
              <p className="text-lg font-bold text-slate-800">{course.instructor}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">About this course</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>
       
        <div className="w-full lg:w-1/3">
          <div className="bg-white border border-slate-100 shadow-[-10px_10px_30px_rgba(0,0,0,0.05)] p-8 rounded-[2rem] sticky top-10">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-black text-slate-900">${course.price}</span>
              <span className="text-slate-400 line-through text-lg font-medium">$99.99</span>
            </div>
            
            <div className="space-y-5 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Duration</span>
                <span className="font-bold text-slate-800">{course.duration}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Rating</span>
                <span className="font-bold text-orange-500">⭐ {course.rating}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Full Lifetime Access</span>
                <span className="font-bold text-slate-800">Yes</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Certificate</span>
                <span className="font-bold text-slate-800">Yes</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-100 active:scale-95 mb-4">
              Enroll Now
            </button>
            <p className="text-center text-xs text-slate-400 font-medium uppercase tracking-widest">
              30-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;