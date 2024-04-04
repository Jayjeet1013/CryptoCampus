import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact"; 
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req:any) {
  try {
    // Parse JSON data from the request
    const { fullname, email, message } = await req.json();

    // Check if required fields are present
    if (!fullname || !email || !message) {
      return NextResponse.json({
        msg: ["Full name, email, and message are required fields."],
        success: false,
      });
    }

    // Connect to MongoDB
    await connectDB();

    // Create a new contact record
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    console.error("Error handling POST request:", error);

    // Handle different types of errors
    if (error instanceof SyntaxError) {
      // Invalid JSON data received
      return NextResponse.json({
        msg: ["Invalid JSON data received."],
        success: false,
      });
    } else if (error instanceof mongoose.Error.ValidationError) {
      // Validation error from MongoDB
      const errorList = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json({
        msg: errorList,
        success: false,
      });
    } else {
      // Other types of errors (e.g., MongoDB connection error)
      return NextResponse.json({
        msg: ["Unable to send message. Please try again later."],
        success: false,
      });
    }
  }
}
