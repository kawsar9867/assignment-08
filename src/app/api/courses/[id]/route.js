import ConnectDB from "@/lib/config/db";
import CourseModel from "@/lib/models/CourseModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  try {
    await ConnectDB();
  
    const resolvedParams = await params;
    const { id } = resolvedParams;

   
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid Course ID Format" },
        { status: 400 },
      );
    }

    
    const course = await CourseModel.findById(id);

    if (!course) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 },
      );
    }
    
    return NextResponse.json({ success: true, data: course });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
