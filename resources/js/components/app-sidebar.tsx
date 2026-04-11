import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem, type Teacher, type Student, type SharedData, type User} from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid , UserCircle , AlertCircle} from 'lucide-react';
import AppLogo from './app-logo';
import { isAdmin } from '@/core/helpers/handler';

//1 .Getters
/*
//1. Funcion que recibe teachers
const getTeachers = (teachers: Teacher[]): void => {
    console.log(teachers);
};

//2. Funcion que recibe los students
const getStudents = (students: Student []) : void => {
    console.log(students);
}; */

// Funcion que valida Interfaz usuario


const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        url: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },

    {
        title: 'Documentation',
        url: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function AppSidebar() {

//Objeto Pasados desde Dashboard.tsx -> teachers, students
const { teachers, students } = usePage<{ 
        teachers: Teacher[], 
        students: Student[] 
    }>().props;

const { auth } = usePage<SharedData>().props;

const check : boolean = isAdmin(teachers, auth.user);

const mainNavItems: NavItem[] = [
    
    {
        title: 'Home',
        url: '/dashboard',
        icon: LayoutGrid,
    },

     {
        title: 'My Profile',
        url: `/home/show/${auth.user.id}`,
        icon: UserCircle,
    },

    // Si check es true, inyectamos TRES elementos de golpe
    ...(check ? [
        {
            title: 'Incidence',
            url: '/home/incidences',
            icon: AlertCircle,
        },
    ] : [
        
       
    ])
];
    
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
