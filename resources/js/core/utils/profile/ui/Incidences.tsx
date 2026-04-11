import { type Incidence } from "@/types";
// 4.1 
export interface IncidencesProps {
    incidences: Incidence[]; 
}

function Incidences({ incidences }: IncidencesProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm h-full">
      {/* CABECERA */}
      <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6 flex items-center gap-2">
        <span className="p-1.5 bg-orange-50 text-orange-600 rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </span>
        Incidencias y Reportes
      </h3>

      {/* LISTADO DE INCIDENCIAS */}
      <div className="space-y-3">
        {incidences && incidences.length > 0 ? (
          incidences.map((p) => (
            <div 
              key={p.id} 
              className="flex flex-col p-4 bg-neutral-50/50 rounded-xl border border-neutral-100 hover:border-orange-200 transition-colors"
            >
              <span className="text-sm text-neutral-700 font-medium">
                {/* Verifica si es .description o .type según tu interface */}
                {p.type}
              </span>
              <span className="text-[10px] text-neutral-400 mt-1 uppercase tracking-tight">
                {/* Verifica si es .date o .data */}
                {new Date(p.data).toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          /* ESTADO VACÍO */
          <div className="h-32 border-2 border-dashed border-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 text-sm italic">
            Sin incidencias registradas
          </div>
        )}
      </div>
    </div>
  );
}

export default Incidences;