import { type Teacher, type User} from '@/types';

/*Exportación de funciones helpers*/
export const isAdmin = (teachers : Teacher[], auth : User) : boolean => {
        return teachers.some((p) => p.user_id == auth.id)
}