import React from 'react';

import { Home, Users, BookOpen, ClipboardList, CheckSquare, Calendar, UserCheck, FileText, DollarSign, Menu } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const menuItems = [
    { name: "Students", path: "/admin/students", icon: Users },
    { name: "Teachers", path: "/admin/teachers", icon: UserCheck },
    { name: "Classes", path: "/admin/classes", icon: BookOpen },
    { name: "Assignment", path: "/admin/assignments", icon: ClipboardList },
    { name: "Marks", path: "/admin/marks", icon: CheckSquare },
    { name: "Student Attendance", path: "/admin/student-attendance", icon: Calendar },
    { name: "Teacher Attendance", path: "/admin/teacher-attendance", icon: Calendar },
    { name: "Student Leave", path: "/admin/student-leave", icon: FileText },
    { name: "Teacher Leave", path: "/admin/teacher-leave", icon: FileText },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Fees", path: "/admin/fees", icon: DollarSign },
];

const teacherMenuItems = [
    { name: "Students", path: "/teachers/students", icon: Users },
    { name: "Assignments", path: "/teachers/assignments", icon: ClipboardList },
    { name: "Marks", path: "/teachers/marks", icon: CheckSquare },
    { name: "Fees", path: "/teachers/fees", icon: DollarSign },
];

const studentMenuItems = [
    { name: "Classes", path: "/students/classes", icon: BookOpen },
    { name: "Assignments", path: "/students/assignments", icon: ClipboardList },
    { name: "Marks", path: "/students/marks", icon: CheckSquare },
    { name: "Fees", path: "/students/fees", icon: DollarSign },
];

const Sidebar = ({ open, setOpen, active }) => {
    const navigate = useNavigate();
    console.log(open, active);
    if (active === "Admin") {
        return (
            <div className={`bg-gray-900 text-white transition-all duration-300 ${open ? "w-64" : "w-20"}`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h1 className={`${!open && "hidden"} text-lg font-bold`}>Admin</h1>
                    <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
                </div>

                <ul className="mt-4">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => { navigate(item.path); }}
                            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-700 ${active === item.name && "bg-gray-700"}`}
                        >
                            <item.icon size={20} />
                            <span className={`${!open && "hidden"}`}>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else if (active === "Student") {
        return (
            <div className={`bg-gray-900 height-screen text-white transition-all duration-300 ${open ? "w-64" : "w-20"}`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h1 className={`${!open && "hidden"} text-lg font-bold`}>Student</h1>
                    <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
                </div>
                <ul className="mt-4">
                    {studentMenuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => { navigate(item.path); }}
                            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-700 ${active === item.name && "bg-gray-700"}`}
                        >
                            <item.icon size={20} />
                            <span className={`${!open && "hidden"}`}>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else if (active === "Teacher") {
        return (
            <div className={`bg-gray-900 text-white height-screen transition-all duration-300 ${open ? "w-64" : "w-20"}`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h1 className={`${!open && "hidden"} text-lg font-bold`}>Teacher</h1>
                    <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
                </div>
                <ul className="mt-4">
                    {teacherMenuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => { navigate(item.path); }}
                            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-700 ${active === item.name && "bg-gray-700"}`}
                        >
                            <item.icon size={20} />
                            <span className={`${!open && "hidden"}`}>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
};

export default Sidebar;