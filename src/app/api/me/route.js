import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Nattida Phiaboontanasan",
    studentId: "650610759",
  });
};
