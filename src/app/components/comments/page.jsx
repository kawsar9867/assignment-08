import Image from 'next/image';
import React from 'react';

const CommentPage = async() => {
  const res = await fetch ("http://localhost:3000/comment.json")
  const comments = await res.json();
  return (
   <div className="max-w-7xl mx-auto px-4 py-16 bg-[#F0F7FF] rounded-t-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A1D37] mb-12 flex items-center gap-3 flex justify-center">
       What Our Students Say
      </h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 shrink-0">
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{comment.name}</h3>
                <p className="text-slate-500 text-sm">{comment.role}</p>
                <div className="flex items-center gap-0.5 mt-1">
                 <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
      
            <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow">
              {comment.comment}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
              <button className="text-blue-600 font-bold text-sm hover:underline">
                Learn More
              </button>
              <span className="text-slate-400 text-xs font-medium">
                Views: 120
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentPage;