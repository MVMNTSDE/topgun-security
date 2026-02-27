import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Force load .env.local
const envLocal = fs.readFileSync(
  path.join(process.cwd(), ".env.local"),
  "utf-8",
);
const envConfig = dotenv.parse(envLocal);
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdmin() {
  const email = "admin@topgun-security.de";
  const password = "TopgunAdmin2026!"; // Default password

  console.log(`Creating/Verifying admin user: ${email}`);

  // Try to define user via Admin API
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    if (error.message.includes("already exists")) {
      console.log("✅ Admin user already exists. You can log in with:");
      console.log(`Email: ${email}`);
      console.log(
        `Password: (Dein bereits vergebenes Passwort, oder 'TopgunAdmin2026!' falls unverändert)`,
      );
    } else {
      console.error("❌ Error creating user:", error.message);
    }
  } else {
    console.log("✅ Admin user created successfully!");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(
      "Please log in at /login and change your password in Supabase if needed.",
    );
  }
}

createAdmin();
