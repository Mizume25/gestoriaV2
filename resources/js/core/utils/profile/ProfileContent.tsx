import { usePage } from '@inertiajs/react';
import File from './ui/File';
import { type PagePropProfile ,type Teacher, type Student } from '@/types';
import BottomBody from './ui/BottomBody';
import Notas from './ui/Notas';
import Incidences from './ui/Incidences';
import  HomeBtn from '@/components/HomeBtn';

function ProfileContent({ children }: any) {

  const { auth } = usePage().props as any;
  const { props } = usePage<PagePropProfile>();
  const { profile, role, results , incidences} = props;

  const teacher = role ? (profile as Teacher) : null;
  const student = !role ? (profile as Student) : null;
  console.log(teacher)
  console.log(student)
  return (
    <>
      <section>
        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
          Información Básica
        </h3>

        {/* GRID INTERNO: 3 columnas, coordinadas y coordinadas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          < File label={'Nombre'} value={auth.user.name}></File>
          <File label={'Apellido'} value={auth.user.last_name}></File>
          <File label={'Edad'} value={auth.user.age} icon='Años'></File>
          {/* Si el perfil es de profesor*/}
          {role && (
            <>
              <File label={'Año Asignado'} value={teacher?.grade}></File>
              <File label={'Salario'} value={teacher?.salary} icon='€'></File>
              <File label={'Fecha Contratación'} value={teacher?.hire_date}></File>
              <HomeBtn> </HomeBtn>
            </>
          )}

          {!role && (
            <>
              <File label={'Año Cursado'} value={student?.grade}></File>
              <File label={'Matricula'} value={student?.enrollment}></File>
            </>
          )}

        </div>
      </section>

      {!role && results && (
        
        <BottomBody>
            <Notas results={results} ></Notas>
            <Incidences incidences={incidences || []}></Incidences>
            <HomeBtn> </HomeBtn>
        </BottomBody>
      )}
      {/*{Object.entries(results).map(([materia, nota]) => (
              <File
                key={materia}
                label={materia}
                value={nota}
                icon="Nota"
              />
            ))}*/}
    </>
  );
}

export default ProfileContent