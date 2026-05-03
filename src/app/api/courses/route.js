import ConnectDB from "@/lib/config/db";
import CourseModel from "@/lib/models/CourseModel";
import { NextResponse } from "next/server";

// GET all courses
export async function GET() {
  try {
    await ConnectDB();

    const courses = await CourseModel.find();

    return NextResponse.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await ConnectDB();

    // get data from body
    const {
      title,
      instructor,
      duration,
      rating,
      level,
      description,
      image,
      category,
    } = await req.json();

    // validation (basic)
    if (!title || !instructor || !category) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        { status: 400 },
      );
    }

    // create course
    const course = await CourseModel.create({
      title,
      instructor,
      duration,
      rating,
      level,
      description,
      image,
      category,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Course created successfully",
        data: course,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
