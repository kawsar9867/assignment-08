import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    specialty: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

const InstructorModel =
  mongoose.models.instructor || mongoose.model("instructor", InstructorSchema);

export default InstructorModel;
