
export interface Applicant {
    id: string;
    full_name: string;
    email: string | null;
    phone: string | null;
    position: string | null;
    status: 'new' | 'screened' | 'interviewed' | 'offered' | 'hired' | 'rejected';
    cv_url: string | null;
    notes: string | null;
    created_at: string;
}

export interface Employee {
    id: string;
    first_name: string;
    last_name: string;
    email: string | null;
    phone: string | null;
    role: 'guard' | 'supervisor' | 'admin';
    status: 'active' | 'inactive' | 'on_leave';
    joined_at: string;
    qualifications: string[] | null;
    avatar_url: string | null;
    created_at: string;
}

export interface Client {
    id: string;
    company_name: string;
    contact_person: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    status: 'active' | 'churned' | 'lead';
    contract_start_date: string | null;
    notes: string | null;
    created_at: string;
}

export interface Report {
    id: string;
    employee_id: string | null;
    client_id: string | null;
    type: 'daily' | 'incident' | 'patrol';
    content: string;
    images: string[] | null;
    severity: 'low' | 'medium' | 'high' | 'critical' | null;
    created_at: string;
    employees?: { first_name: string; last_name: string } | null;
    clients?: { company_name: string } | null;
}
