// import Layout from "../../components/Layout";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function TeacherDashboard() {

    const [active, setActive] = useState("Teacher");
    const [open, setOpen] = useState(true);
    const teachers = [
        {
            id: 1,
            name: 'Sophia Williams',
            subject: 'Mathematics',
            department: 'Science',
            phone: '+1 202-555-0142',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Daniel Brown',
            subject: 'Physics',
            department: 'Science',
            phone: '+1 202-555-0185',
            status: 'On Leave',
        },
        {
            id: 3,
            name: 'Olivia Taylor',
            subject: 'English',
            department: 'Arts',
            phone: '+1 202-555-0177',
            status: 'Active',
        },
        {
            id: 4,
            name: 'James Wilson',
            subject: 'Computer Science',
            department: 'Technology',
            phone: '+1 202-555-0199',
            status: 'Active',
        },
    ];

    return <>
        <div className="container w-full relative">
            <Sidebar open={open} setActive={setActive} setOpen={setOpen} active={active} />
            <div className="min-h-screen bg-slate-100 p-6 w-[84%] ml-[16%]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-800">
                            Teacher Management
                        </h1>
                        <p className="text-slate-500 mt-2">
                            Manage teachers, departments, and academic staff information.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="Search teacher..."
                            className="px-4 py-3 rounded-2xl border border-slate-200 bg-white outline-none shadow-sm"
                        />

                        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-2xl shadow-lg">
                            + Add Teacher
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-sm">Total Teachers</p>
                        <h2 className="text-4xl font-bold text-slate-800 mt-3">148</h2>
                        <p className="text-green-500 text-sm mt-2">+8 this month</p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-sm">Departments</p>
                        <h2 className="text-4xl font-bold text-blue-600 mt-3">12</h2>
                        <p className="text-blue-500 text-sm mt-2">Academic divisions</p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-sm">Active Staff</p>
                        <h2 className="text-4xl font-bold text-green-600 mt-3">139</h2>
                        <p className="text-green-500 text-sm mt-2">Currently available</p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-sm">On Leave</p>
                        <h2 className="text-4xl font-bold text-yellow-500 mt-3">9</h2>
                        <p className="text-yellow-500 text-sm mt-2">Temporary leave</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 overflow-x-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                Teacher Directory
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">
                                Complete teacher and faculty information.
                            </p>
                        </div>

                        <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition">
                            Export List
                        </button>
                    </div>

                    <table className="w-full min-w-[900px]">
                        <thead>
                            <tr className="border-b border-slate-100 text-left text-slate-500">
                                <th className="pb-4">Teacher Name</th>
                                <th className="pb-4">Subject</th>
                                <th className="pb-4">Department</th>
                                <th className="pb-4">Phone</th>
                                <th className="pb-4">Status</th>
                                <th className="pb-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {teachers.map((teacher) => (
                                <tr
                                    key={teacher.id}
                                    className="border-b border-slate-50 hover:bg-slate-50 transition"
                                >
                                    <td className="py-5 font-semibold text-slate-700">
                                        {teacher.name}
                                    </td>

                                    <td className="py-5 text-slate-600">
                                        {teacher.subject}
                                    </td>

                                    <td className="py-5 text-slate-600">
                                        {teacher.department}
                                    </td>

                                    <td className="py-5 text-slate-600">
                                        {teacher.phone}
                                    </td>

                                    <td className="py-5">
                                        <span
                                            className={`px-4 py-2 rounded-full text-xs font-semibold ${teacher.status === 'Active'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                        >
                                            {teacher.status}
                                        </span>
                                    </td>

                                    <td className="py-5">
                                        <div className="flex gap-2">
                                            <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition text-sm font-medium">
                                                View
                                            </button>

                                            <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium">
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export function TeacherManagementPage() {

}