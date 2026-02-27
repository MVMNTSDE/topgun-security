import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const logId = searchParams.get("id");

  if (logId) {
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
      );

      // Update mail_logs to set opened_at to now
      await supabase
        .from("mail_logs")
        .update({ opened_at: new Date().toISOString() })
        .eq("id", logId);
    } catch (e) {
      console.error("Failed to track email open", e);
    }
  }

  // Always return a 1x1 transparent GIF
  const pixelBase64 =
    "R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
  const pixelBuffer = Buffer.from(pixelBase64, "base64");

  return new NextResponse(pixelBuffer, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
