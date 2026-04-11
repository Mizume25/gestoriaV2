import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import DetailWindowProfile from '@/core/utils/edit/DetailWindowProfile';
import TableDetailProfile from '@/core/utils/edit/TableDetailProfile';
import NotasWindow from '@/core/utils/edit/ui/NotasWindow';
import IncidenceWindows from '@/core/utils/edit/ui/IncidenceWindows';
import { isAdmin } from '@/core/helpers/handler';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Teacher, type Student, type Incidence, type SharedData } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';

interface NotasProps {
    results: Record<string, string | number> | null | undefined;
}




interface results {
    [key: number]: {
        [subject: string]: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

//Interfaz de un query
interface ProfileRow {
    id: number,
    name: string,
    last_name: string,
    age: number,
    grade: string,
    enrollment: string
}






// Los parametros son las interficies
export default function Dashboard({ rows, students, results, incidences , teachers}: { rows: ProfileRow[], students: Student[], results: results, incidences: Incidence[], teachers:Teacher[] }) {
    const { auth } = usePage<SharedData>().props;
    /* const handelName = (name : string) : void  =>  {
      console.log("Datos recibidos del hijo:", name);
   };*/
    const lastname = "Geronimo";
    const [name, setName] = useState(rows[0].name);
    const [id, setID] = useState(rows[1].id);

    // Esta función recibirá los datos del hijo
    const handleName = (name: string): void => {
        setName(name);
    };

    const handleID = (id: number): void => {
        setID(id);
    }

    const foundGrades = (id: number, results: results): NotasProps => {
        const profile = results[id];

        const props: NotasProps = {
            results: profile
        };

        return props;

    }

    const notas: NotasProps = foundGrades(id, results);


    //Buscamos Incidencia
    const foundIncidences = (id: number, incidences: Incidence[]): Incidence[] | []| null | undefined => {

        const temp = id; 

        const profile : Incidence[] | [] | null | undefined = incidences.filter((inc: Incidence) => inc.student_id === temp);

        console.log("Hola soy incidencia",profile); 

        return profile;

    }

    const warning = foundIncidences(id, incidences);


    console.log(results);

    const check : boolean = isAdmin(teachers, auth.user);

    console.log("¿Este usuario es profesor?", check ? "SÍ" : "NO");

    return (
        <AppLayout breadcrumbs={breadcrumbs}>

            {/* Head -> Comopnente de la Pestaña de la Página*/}

            <Head title="Panel de Usuario" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        
                      {check && (
                        <DetailWindowProfile name={name} />
                    )}

                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        {check && (
                             <NotasWindow results={notas.results} />
                        )}
                       
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        {check && (
                            <IncidenceWindows incidences={warning || []} />
                        )}
                        
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min bg-white dark:bg-slate-900 overflow-hidden">
                    {check && (
                        <TableDetailProfile rows={rows} handleName={handleName} handleID={handleID}></TableDetailProfile>
                    )}

                </div>
            </div>

        </AppLayout>
    );
}
