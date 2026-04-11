interface FileProps {
  label: string;
  value: any;
  icon?: React.ReactNode; 
}

function File({ label, value, icon }: FileProps) {
  return (
    <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-5 shadow-sm">
        <p className="text-xs text-neutral-500 font-medium">{label}</p>
        <p className="text-base font-semibold mt-1">{value} {icon}</p>
    </div>
  )
}

export default File