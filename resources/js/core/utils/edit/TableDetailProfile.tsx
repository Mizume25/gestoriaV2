import { Student } from "@/types"

//Interfaz de un query
interface ProfileRow {
    id: number,
    name: string,
    last_name: string,
    age: number,
    grade: string,
    enrollment: string
}



/* Tabla que carga usuarios estudiantes*/
function TableDetailProfile({ rows, handleName , handleID }: { rows: ProfileRow[] , handleName: (name: string) => void , handleID:(id:number) => void}) {

    
    
    function getName (name:string) : void {
        handleName(name);
    }

    function getID (id:number) : void {
        handleID(id);
    }


    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400 border-b border-sidebar-border/70">
                    <tr>
                        <th className="px-6 py-4 font-semibold">ID</th>
                        <th className="px-6 py-4 font-semibold">Nombre</th>
                        <th className="px-6 py-4 font-semibold">Apellido</th>
                        <th className="px-6 py-4 font-semibold">Edad</th>
                        <th className="px-6 py-4 font-semibold">Año Escolar</th>
                        <th className="px-6 py-4 font-semibold">Fecha Matrícula</th>
                        <th className="px-6 py-4 text-center font-semibold">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-sidebar-border/50">
                    {rows?.map((s) => (
                         <tr key={s.id} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white" data-name={s.id}>{s.id}</td>
                            <td className="px-6 py-4" data-name={s.name}>{s.name}</td>
                            <td className="px-6 py-4">{s.last_name}</td>
                            <td className="px-6 py-4">{s.age}</td>
                            <td className="px-6 py-4">{s.grade}</td>
                            <td className="px-6 py-4">{s.enrollment}</td>
                             <td className="px-6 py-4 text-center">
                        <button className="px-4 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg hover:bg-indigo-600 hover:text-white transition-all shadow-sm cursor-pointer"
                                                onClick={() => {
                        getName(s.name);
                        getID(s.id);
                        }} >
                            Detalles
                        </button>
                    </td>
                         </tr>
                    ))}

                    {/* Ejemplo de fila */}
                    { /* 
                <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#001</td>
                    <td className="px-6 py-4">Juan Carlos</td>
                    <td className="px-6 py-4">Pérez Modesto</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">4º ESO</td>
                    <td className="px-6 py-4">12/03/2026</td>
                    <td className="px-6 py-4 text-center">
                        <button className="px-4 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                            Detalles
                        </button>
                    </td>
                </tr> --> */}

                    {/* Puedes mapear tus datos aquí */}
                </tbody>
            </table>
        </div>
    )
}

export default TableDetailProfile