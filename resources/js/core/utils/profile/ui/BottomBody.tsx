import Notas from "./Notas"

function BottomBody({children} : any) {
  return (
    <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {children}
    </section>
  )
}

export default BottomBody