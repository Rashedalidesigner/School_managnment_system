export default function Topbar({ role, setOpen }) {
    return (
        <div className="bg-white shadow px-4 py-3 flex items-center">
            <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(true)}
            >
                ☰
            </button>

            <h1 className="ml-3 font-bold capitalize">
                {role} Dashboard
            </h1>
        </div>
    );
}