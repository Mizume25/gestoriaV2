import { Head, usePage } from '@inertiajs/react';
import { UserInfo } from '@/components/user-info';

function ProfileLayout({ children }: any) {
  const { auth } = usePage().props as any;

  return (
    <div className="min-h-screen w-full bg-white from-indigo-500 via-purple-500 to-pink-500 text-black px-20">´

      <Head title="Profile" /> {/* Cambiar View de la pestaña*/}
      <main className="h-[90vh] w-full max-w-5xl mx-auto p-6 md:p-10 bg-white rounded-[2rem] shadow-lg shadow-neutral-200/50 border border-black overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default ProfileLayout