import { sendMail } from "@/utils/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, familyname, email, message } = body;

    // اعتبارسنجی ساده
    if (!name || !email || !message || !familyname) {
      return NextResponse.json(
        { error: "همه فیلدها الزامی هستند" },
        { status: 400 }
      );
    }

    await sendMail({ name, familyname, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "خطا در ارسال ایمیل" }, { status: 500 });
  }
}
