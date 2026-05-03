import ConnectDB from "@/lib/config/db";
import InstructorModel from "@/lib/models/instractorModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectDB();
    const instructors = await InstructorModel.find().sort({ rating: -1 });

    return NextResponse.json({
      success: true,
      data: instructors,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await ConnectDB();
    const body = await req.json();

    if (Array.isArray(body)) {
      const result = await InstructorModel.insertMany(body);
      return NextResponse.json({
        success: true,
        message: "Instructors added!",
        data: result,
      });
    }

    const result = await InstructorModel.create(body);
    return NextResponse.json(
      { success: true, message: "Instructor added!", data: result },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
