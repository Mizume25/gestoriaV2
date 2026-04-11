
import { type Student } from "@/types"
/* Div del perfil de Detalle*/
export default function DetailWindowProfile({ name } : { name: string }) {
    
    const letter: string = name[0];
    return (
        /* Contenedor Exterior: ahora con flex-col para apilar elementos verticalmente */
        <div className="flex flex-col items-center justify-center bg-white p-8 w-full h-full">

            {/* 1. Contenedor del Perfil (Círculo) */}
            <div className="
                flex items-center justify-center 
                border border-indigo-50 
                p-2 rounded-full aspect-square 
                bg-white 
                shadow-[0_10px_25px_-5px_rgba(79,70,229,0.1),_0_8px_10px_-6px_rgba(79,70,229,0.1)] 
                mb-6 w-32 h-32
            ">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-24 h-24 text-indigo-700"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
                    <text
                        x="12"
                        y="15.8"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                        fontSize="10"
                        fill="currentColor"
                    >
                        {letter}
                    </text>
                </svg>
            </div>

            {/* 2. Segundo Div: Centrado y por debajo */}
            <div className="text-center">
                <h2 className="text-xl font-bold text-slate-800">
                    {name}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                    Estudiante Activo
                </p>
            </div>

        </div>
    )
}
