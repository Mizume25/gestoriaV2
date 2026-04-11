interface NotasProps {
    results: Record<string, string | number> | null | undefined;
}

function NotasWindow({ results }: NotasProps) {
    return (
        /* Contenedor principal sin paddings externos para que la tabla toque los bordes si es necesario */
        <div className="w-full h-full flex flex-col bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            
            {/* Scrollable Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <table className="w-full text-left border-collapse table-fixed">
                    {/* El thead ahora contiene el título y el icono */}
                    <thead className="sticky top-0 bg-neutral-50 z-10 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
                        <tr>
                            <th className="px-4 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider w-2/3">
                                <div className="flex items-center gap-2">
                                    <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01" />
                                        </svg>
                                    </span>
                                    Calificaciones Académicas
                                </div>
                            </th>
                            <th className="px-4 py-4 text-xs font-bold text-neutral-500 uppercase text-right w-1/3">
                                Nota
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-neutral-100">
                        {Object.entries(results || {}).map(([materia, nota]) => (
                            <tr key={materia} className="hover:bg-neutral-50/50 transition-colors">
                                <td className="px-6 py-4 text-sm text-neutral-700 font-medium truncate">
                                    {materia}
                                </td>
                                <td className="px-6 py-4 text-sm text-right">
                                    <span className={`inline-flex items-center justify-center min-w-[2rem] h-8 rounded-lg font-bold ${
                                        Number(nota) >= 5 
                                        ? 'text-green-600 bg-green-50' 
                                        : 'text-red-500 bg-red-50'
                                    } px-2`}>
                                        {nota}
                                    </span>
                                </td>
                            </tr>
                        ))}

                        {/* Estado vacío centrado */}
                        {(!results || Object.keys(results).length === 0) && (
                            <tr>
                                <td colSpan={2} className="px-4 py-20 text-center">
                                    <div className="flex flex-col items-center justify-center text-neutral-400">
                                        <p className="text-sm">No hay calificaciones disponibles</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default NotasWindow;