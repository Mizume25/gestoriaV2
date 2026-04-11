

interface NotasProps {
    results: Record<string, string | number> | null | undefined;
}
function Notas({ results }: NotasProps) {

    return (
        <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01"
                        />
                    </svg>
                </span>
                Calificaciones Académicas
            </h3>

            <div className="space-y-4">
                {/* Aquí renderizaremos el componente de Notas que definamos */}
                <div className="w-full border border-neutral-100 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-neutral-50 border-b border-neutral-100">
                            <tr>
                                <th className="px-4 py-3 text-xs font-bold text-neutral-500 uppercase">Materia</th>
                                <th className="px-4 py-3 text-xs font-bold text-neutral-500 uppercase text-right">Nota</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-50">
                            {Object.entries(results || {}).map(([materia, nota]) => (
                                <tr key={materia} className="hover:bg-neutral-50 transition-colors">
                                    <td className="px-4 py-3 text-sm text-neutral-700 font-medium">
                                        {materia}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-right">
                                        <span className={`font-bold ${Number(nota) >= 5 ? 'text-green-600' : 'text-red-500'}`}>
                                            {nota}
                                        </span>
                                    </td>
                                </tr>
                            ))}

                            {/* Estado vacío por si no hay notas */}
                            {Object.keys(results || {}).length === 0 && (
                                <tr>
                                    <td colSpan={2} className="px-4 py-8 text-center text-neutral-400 text-sm">
                                        No hay calificaciones disponibles
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Notas