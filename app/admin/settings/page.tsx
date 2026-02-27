import { Settings, ShieldCheck, Bell, User } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-500">
          Configure admin preferences and operational defaults.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SettingCard
          icon={User}
          title="Account"
          description="Manage profile details and admin contact information."
        />
        <SettingCard
          icon={Bell}
          title="Notifications"
          description="Choose alert channels and event notification thresholds."
        />
        <SettingCard
          icon={ShieldCheck}
          title="Security"
          description="Review session, access, and password policy settings."
        />
      </div>

      <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2 text-gray-800 font-semibold mb-2">
          <Settings size={18} />
          Configuration Status
        </div>
        <p className="text-sm text-gray-600">
          Settings management is available. Wire each card to concrete admin
          controls as needed.
        </p>
      </div>
    </div>
  );
}

interface SettingCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function SettingCard({ icon: Icon, title, description }: SettingCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
      <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center mb-4">
        <Icon size={18} />
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
