import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/contact';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method Not Allowed' });
  }

  try {
    // Parse JSON data from the request
    const { fullname, email, message } = req.body;

    // Check if required fields are present
    if (!fullname || !email || !message) {
      return res.status(400).json({
        msg: ["Full name, email, and message are required fields."],
        success: false,
      });
    }

    // Connect to MongoDB
    await connectDB();
     
    // Create a new contact record
    const newContact = new Contact({ fullname, email, message });
    await newContact.save();

    return res.status(200).json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    console.error("Error handling POST request:", error);

    // Handle different types of errors
    return res.status(500).json({
      msg: ["Unable to send message. Please try again later."],
      success: false,
    });
  }
}
