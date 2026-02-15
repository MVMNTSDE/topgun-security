
import React from "react";
import Link from "next/link";
import { Mail, BarChart, Users, Settings, LogOut } from "lucide-react";
import { logout } from "../login/actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <span className="bg-primary text-white p-1 rounded">TG</span> Admin
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link
             href="/admin"
             className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded hover:bg-gray-50 hover:text-primary transition-colors"
          >
            <BarChart size={18} />
            Dashboard
          </Link>
          <div className="pt-4 pb-2 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Operations
          </div>
          <Link
            href="/admin/applicants"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded hover:bg-gray-50 hover:text-primary transition-colors"
          >
            <Users size={18} />
            Applicants
          </Link>
          <Link
            href="/admin/employees"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded hover:bg-gray-50 hover:text-primary transition-colors"
          >
            <Users size={18} />
            Employees
          </Link>
          <Link
            href="/admin/clients"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded hover:bg-gray-50 hover:text-primary transition-colors"
          >
            <Users size={18} />
            Clients
          </Link>
          <Link
            href="/admin/reports"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded hover:bg-gray-50 hover:text-primary transition-colors"
          >
            <BarChart size={18} />
            Reports
          </Link>
           <div className="pt-4 pb-2 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Marketing
          </div>
          <Link
            href="/admin/mailing"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded hover:bg-gray-50 hover:text-primary transition-colors"
          >
            <Mail size={18} />
            Cold Mailing
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
             <Link href="/admin/settings" className="px-4 py-3 text-sm font-medium text-gray-500 flex items-center gap-3 hover:text-primary transition-colors">
             <Settings size={18} /> Settings
          </Link>
          <form action={logout} className="mt-2">
            <button type="submit" className="w-full px-4 py-3 text-sm font-medium text-red-500 flex items-center gap-3 hover:bg-red-50 transition-colors">
                <LogOut size={18} /> Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
            {children}
        </div>
      </main>
    </div>
  );
}
