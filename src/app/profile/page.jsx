"use client";
import { useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const info = session?.user;

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  if (isPending) return <div className="text-center mt-20">Loading...</div>;
  if (!info) return <div className="text-center mt-20 font-bold">Please Login First!</div>;

  const handleSave = () => {
    const updatedData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    console.log("Save Data:", updatedData);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="h-28 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

        <div className="px-8 pb-8">
          <div className="relative -mt-14 mb-6 flex justify-center">
            <div className="p-1.5 bg-white rounded-full shadow-lg">
              <Avatar size="lg" className="w-24 h-24" isBordered color="primary">
                <Avatar.Image
                  alt={info.name || "User"}
                  src={info.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {(info.name || info.email || "U").charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">{info.name || "User Name"}</h2>
              <p className="text-gray-500 text-sm">{info.email}</p>
            </div>
          
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  ref={nameRef}
                  type="text"
                  defaultValue={info.name}
                  disabled={!isEditing}
                  className={`p-3 rounded-2xl border transition-all ${
                    isEditing ? "border-blue-500 bg-white ring-2 ring-blue-50 outline-none" : "border-transparent bg-gray-50 text-gray-700"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  ref={emailRef}
                  type="email"
                  defaultValue={info.email}
                  disabled={!isEditing}
                  className={`p-3 rounded-2xl border transition-all ${
                    isEditing ? "border-blue-500 bg-white ring-2 ring-blue-50 outline-none" : "border-transparent bg-gray-50 text-gray-600"
                  }`}
                />
              </div>
            </div>
          
            <div className="pt-4">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-black text-white py-3.5 rounded-2xl font-bold hover:bg-gray-800 transition shadow-md active:scale-95"
                >
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-gray-100 text-gray-600 py-3.5 rounded-2xl font-bold hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-blue-600 text-white py-3.5 rounded-2xl font-bold hover:bg-blue-700 shadow-lg active:scale-95 transition"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;