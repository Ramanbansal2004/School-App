import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const file = formData.get("image");

    let imageUrl = null;
    console.log("Received file:", file.name);
    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      // Cloudinary upload
      imageUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "schools" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        stream.end(buffer);
      });
    }
    console.log("Image URL:", imageUrl);
    await db.query(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, email_id, imageUrl]
    );

    return NextResponse.json({ message: "School added successfully!" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
