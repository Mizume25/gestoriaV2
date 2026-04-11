import { type Incidence } from "@/types";
// 4.1 
export interface IncidencesProps {
    incidences: Incidence[]; 
}

function IncidenceWindows({ incidences }: IncidencesProps) {
  return (
    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border bg-white dark:bg-neutral-900">
  {/* Contenedor con Scroll - Ocupa todo el espacio */}
  <div className="absolute inset-0 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-200">
    
    {/* CABECERA (Sticky para que no se pierda al hacer scroll) */}
    <h3 className="sticky top-0 bg-white dark:bg-neutral-900 pb-3 text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2 z-10">
      <span className="p-1 bg-orange-50 text-orange-600 rounded-md">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </span>
      Incidencias y Reportes
    </h3>

    {/* LISTADO */}
    <div className="space-y-2">
      {incidences && incidences.length > 0 ? (
        incidences.map((p) => (
          <div 
            key={p.id} 
            className="flex flex-col p-3 bg-neutral-50/80 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-800 hover:border-orange-200 transition-colors"
          >
            <span className="text-xs text-neutral-700 dark:text-neutral-300 font-semibold">
              {p.type}
            </span>
            <span className="text-[9px] text-neutral-400 mt-0.5 uppercase">
              {new Date(p.data).toLocaleDateString()}
            </span>
          </div>
        ))
      ) : (
        /* ESTADO VACÍO - Centrado en el espacio disponible */
        <div className="flex flex-col items-center justify-center h-full min-h-[100px] text-neutral-400 text-xs italic opacity-60">
          Sin incidencias registradas
        </div>
      )}
    </div>
  </div>
</div>
  );
}

export default IncidenceWindows;