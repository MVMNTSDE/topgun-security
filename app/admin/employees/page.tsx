
import { getEmployees } from "./actions"; 
import { Plus, Shield, Briefcase } from "lucide-react";
import { Employee } from "../types";

export default async function EmployeesPage() {
  const employees: Employee[] = await getEmployees();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
            <p className="text-gray-500">Manage security personnel and staff.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded shadow-sm text-sm font-medium hover:bg-primary/90 transition-colors">
            <Plus size={16} /> Add Employee
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((emp) => (
              <EmployeeCard key={emp.id} employee={emp} />
          ))}
          {employees.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500 bg-white border border-dashed border-gray-300 rounded-lg">
                  No employees found. Add your first team member!
              </div>
          )}
      </div>
    </div>
  );
}

function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-lg">
                        {employee.first_name[0]}{employee.last_name[0]}
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">{employee.first_name} {employee.last_name}</h3>
                        <span className="text-xs text-gray-500 capitalize flex items-center gap-1">
                           {employee.role === 'guard' ? <Shield size={12} /> : <Briefcase size={12} />}
                           {employee.role}
                        </span>
                    </div>
                </div>
                 <span className={`px-2 py-1 rounded-full text-xs font-medium 
                    ${employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {employee.status}
                </span>
            </div>
            
            <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                    <span>Phone:</span>
                    <span className="text-gray-900">{employee.phone || '-'}</span>
                </div>
                <div className="flex justify-between">
                    <span>Joined:</span>
                    <span className="text-gray-900">{new Date(employee.joined_at).toLocaleDateString()}</span>
                </div>
            </div>

            <div className="pt-4 mt-auto border-t border-gray-100 flex gap-2">
                <button className="flex-1 px-3 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-50 rounded hover:bg-gray-100">
                    View Profile
                </button>
                <button className="flex-1 px-3 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-50 rounded hover:bg-gray-100">
                    Schedule
                </button>
            </div>
        </div>
    )
}
