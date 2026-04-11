import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFDFC] p-6 text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
    {/* Contenedor Central */}
    <div className="w-full max-w-[400px] text-center">
        {/* Identidad del Instituto */}
        <div className="mb-8 flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Instituto Iumina</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Portal de Acceso Académico</p>
        </div>

        {/* Bloque de Acciones Estilo Card */}
        <div className="space-y-4 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-[#1E1E1E] dark:bg-[#0D0D0D]">
            {auth.user ? (
                // CASO 1: Sesión abierta
                <div className="flex flex-col gap-4">
                    <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/20">
                        <p className="text-sm font-medium text-indigo-900 dark:text-indigo-300">
                            Hola de nuevo, <span className="font-bold">{auth.user.name}</span>
                        </p>
                    </div>
                    <Link
                        href={route('dashboard')}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-bold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
                    >
                        Ir al Dashboard
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            ) : (
                // CASO 2 y 3: No hay sesión
                <div className="flex flex-col gap-3">
                    <Link
                        href={route('login')}
                        className="flex w-full items-center justify-center rounded-xl bg-[#1b1b18] py-4 font-bold text-white transition hover:bg-black dark:bg-[#EDEDEC] dark:text-[#0a0a0a] dark:hover:bg-white"
                    >
                        Iniciar Sesión
                    </Link>
                    
                    <div className="flex items-center gap-4 py-2">
                        <div className="h-[1px] flex-1 bg-gray-100 dark:bg-[#1E1E1E]"></div>
                        <span className="text-xs font-medium text-gray-400 uppercase">o</span>
                        <div className="h-[1px] flex-1 bg-gray-100 dark:bg-[#1E1E1E]"></div>
                    </div>

                    <Link
                        href={route('register')}
                        className="flex w-full items-center justify-center rounded-xl border border-gray-200 py-4 font-bold transition hover:bg-gray-50 dark:border-[#1E1E1E] dark:hover:bg-white/5"
                    >
                        Crear Cuenta
                    </Link>
                </div>
            )}
        </div>

       
    </div>
</div>
        </>
    );
}
