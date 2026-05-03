import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
        404
      </h1>

      <div className="bg-white px-6 py-2 text-sm rounded-md rotate-12 absolute border border-blue-100 shadow-sm">
        Page Not Found
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
        >
          Return Home
        </Link>
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
