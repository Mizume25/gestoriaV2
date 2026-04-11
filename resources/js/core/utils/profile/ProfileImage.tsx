import { UserInfo } from '@/components/user-info';
import { usePage } from '@inertiajs/react';
function ProfileImage() {
const { auth } = usePage().props as any;

const name = auth?.user.name;
const nameProfile = name?.[0];


  return (
    <div className="flex flex-col items-center justify-start pt-4">
    {/* El div cuadrado de la foto: 'aspect-square' asegura que sea cuadrado */}
    <div className="flex items-center justify-center border-2 border-indigo-100 p-2 rounded-full aspect-square bg-white shadow-inner mb-6 w-32 h-32">
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-24 h-24 text-indigo-700"
        >
            {/* El Círculo Perfecto */}
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            
            <text 
                x="12" 
                y="16" 
                textAnchor="middle" 
                fontFamily="sans-serif" 
                fontWeight="bold" 
                fontSize="12" 
                fill="currentColor"
            >
                {nameProfile}
            </text>
        </svg>
    </div>
</div>
  )
}

export default ProfileImage