import { useNavigate } from "react-router-dom";

export default function Sidebar({ role, open, setOpen }) {
    const navigate = useNavigate();

    const menus = {
        admin: [
            { name: "Dashboard", path: "/admin" },
            { name: "Students", path: "/admin/students" },
            { name: "Teachers", path: "/admin/teachers" },
            { name: "Classes", path: "/admin/classes" },
            { name: "Assignment", path: "/admin/assignment" },
            { name: "mark", path: "/admin/mark" },
            { name: "StudentAttendence", path: "/admin/studentattendence" },
            { name: "TeacherAttendence", path: "/admin/teacherattendence" },
            { name: "Studentleave", path: "/admin/studentleave" },
            { name: "Teacher", path: "/admin/leave" },
            { name: "User", path: "/admin/user" },

        ],
        teacher: [
            { name: "Dashboard", path: "/teacher" },
            { name: "Leave", path: "/teacher/leave" },
            { name: "Attendance", path: "/teacher/attendance" },
            { name: "Assignments", path: "/teacher/assignments" },
        ],
        student: [
            { name: "Dashboard", path: "/student" },
            { name: "Leave", path: "/student/leave" },
            { name: "Results", path: "/student/results" },
            { name: "Attendance", path: "/student/attendance" },
        ],
    };

    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <div
                className={`fixed md:static z-50 w-64 h-full bg-white shadow transform transition-transform
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                <div className="p-4 font-bold border-b">
                    School System
                </div>

                <ul className="p-3 space-y-2">
                    {menus[role]?.map((item) => (
                        <li
                            key={item.path}
                            className="p-2 rounded hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                navigate(item.path);
                                setOpen(false);
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}