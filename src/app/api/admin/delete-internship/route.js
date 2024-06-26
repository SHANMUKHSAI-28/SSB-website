import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Internship from "@/models/internship";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req, res) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const { id } = req.body;

      if (!id) {
        return NextResponse.json({
          success: false,
          message: "Internship ID is required",
        });
      }

      const deletedInternship = await Internship.findByIdAndDelete(id);

      if (deletedInternship) {
        return NextResponse.json({
          success: true,
          message: "Internship deleted successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to delete the internship. Internship not found.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again later",
    });
  }
}
