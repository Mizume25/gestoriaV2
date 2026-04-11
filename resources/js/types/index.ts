import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    url: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

// Interfaces para objetos de Base de Datos

//1. Objeto Teacher
export interface Teacher {
    id: number;
    grade: string;
    hire_date: Date;
    salary: number;
    user_id:number;
    created_at: string;
    updated_at: string;
}

//2. Objeto Student
export interface Student {
    id: number,
    grade: string,
    enrollment: Date,
    user_id: number,
    created_at: string;
    updated_at: string;
}

export interface ArrayStudent {
    list: Student [],
}

//3. Objeto Subject
export interface Subject {
    id:number,
    name_subject: string,
    elective_Subject?: React.ReactNode; 
}

//4. Objeto Incidencia
export interface Incidence {
    id: number,
    student_id: number,
    data: Date,
    type: string
}



//Supra-interficie en caso de ser profesor
export interface TeacherPageProps extends SharedData {
    teacher: Teacher;
}

//Supra-interficie para tener un perfil y reesultados en caso de ser estudiante
export interface PagePropProfile extends SharedData {
    profile: Teacher | Student;
    results?: Record<string, number | string> | null;
    incidences?:Incidence[];
    role: boolean; 
}
