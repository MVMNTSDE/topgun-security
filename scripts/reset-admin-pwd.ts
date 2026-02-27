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

async function resetAdminPassword() {
  const email = "admin@topgun-security.de";
  const newPassword = "TopgunAdmin2026!";

  console.log(`Resetting password for: ${email}`);

  // Fetch the user to get their ID
  const { data: users, error: fetchError } =
    await supabase.auth.admin.listUsers();

  if (fetchError) {
    console.error("❌ Error fetching users:", fetchError.message);
    return;
  }

  const user = users.users.find((u) => u.email === email);

  if (!user) {
    console.log("⚠️ Admin user not found. Creating it instead...");
    const { error: createError } = await supabase.auth.admin.createUser({
      email,
      password: newPassword,
      email_confirm: true,
    });
    if (createError)
      console.error("❌ Error creating user:", createError.message);
    else console.log("✅ User created with password:", newPassword);
    return;
  }

  // Update their password
  const { error: updateError } = await supabase.auth.admin.updateUserById(
    user.id,
    { password: newPassword },
  );

  if (updateError) {
    console.error("❌ Error updating password:", updateError.message);
  } else {
    console.log("✅ Admin password successfully reset!");
    console.log(`Email: ${email}`);
    console.log(`New Password: ${newPassword}`);
    console.log("Please log in at /login directly.");
  }
}

resetAdminPassword();
