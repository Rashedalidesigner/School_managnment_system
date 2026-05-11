// import Layout from "../../components/Layout";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const stats = [
    { title: 'Total Courses', value: '12' },
    { title: 'Attendance', value: '92%' },
    { title: 'Assignments', value: '08' },
    { title: 'GPA', value: '3.85' },
];

const assignments = [
    {
        subject: 'Mathematics',
        title: 'Algebra Homework',
        due: '12 May 2026',
        status: 'Pending',
    },
    {
        subject: 'Physics',
        title: 'Lab Report',
        due: '14 May 2026',
        status: 'Submitted',
    },
    {
        subject: 'English',
        title: 'Essay Writing',
        due: '15 May 2026',
        status: 'Pending',
    },
];

const routine = [
    {
        time: '09:00 AM',
        subject: 'Mathematics',
        teacher: 'Mr. Hasan',
    },
    {
        time: '10:30 AM',
        subject: 'Physics',
        teacher: 'Mrs. Rahman',
    },
    {
        time: '12:00 PM',
        subject: 'English',
        teacher: 'Mr. Karim',
    },
];

export default function StudentDashboard() {
    const [active, setActive] = useState("Student");
    const [open, setOpen] = useState(true);
    return (
        <div className="container min-h-screen relative">

            <div className="min-h-screen bg-slate-100 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-slate-800">
                                Student Dashboard
                            </h1>
                            <p className="text-slate-500 mt-2">
                                Welcome back, Rashed 👋
                            </p>
                        </div>

                        <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/100"
                                alt="student"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-slate-700">Rashed Ali</h3>
                                <p className="text-sm text-slate-500">Class 10 - Science</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
                            >
                                <p className="text-slate-500 text-sm">{item.title}</p>
                                <h2 className="text-3xl font-bold text-slate-800 mt-2">
                                    {item.value}
                                </h2>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Side */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Assignments */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-2xl font-semibold text-slate-800">
                                        Assignments
                                    </h2>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all">
                                        View All
                                    </button>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left border-b border-slate-200">
                                                <th className="pb-3 text-slate-500 font-medium">
                                                    Subject
                                                </th>
                                                <th className="pb-3 text-slate-500 font-medium">
                                                    Title
                                                </th>
                                                <th className="pb-3 text-slate-500 font-medium">Due</th>
                                                <th className="pb-3 text-slate-500 font-medium">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {assignments.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b border-slate-100 hover:bg-slate-50"
                                                >
                                                    <td className="py-4 font-medium text-slate-700">
                                                        {item.subject}
                                                    </td>
                                                    <td className="py-4 text-slate-600">
                                                        {item.title}
                                                    </td>
                                                    <td className="py-4 text-slate-600">{item.due}</td>
                                                    <td className="py-4">
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-sm font-medium ${item.status === 'Pending'
                                                                ? 'bg-orange-100 text-orange-600'
                                                                : 'bg-green-100 text-green-600'
                                                                }`}
                                                        >
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                                <h2 className="text-2xl font-semibold text-slate-800 mb-5">
                                    Academic Progress
                                </h2>

                                <div className="space-y-5">
                                    {[
                                        { subject: 'Mathematics', progress: '85%' },
                                        { subject: 'Physics', progress: '72%' },
                                        { subject: 'English', progress: '90%' },
                                    ].map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-slate-700">
                                                    {item.subject}
                                                </span>
                                                <span className="text-slate-500">{item.progress}</span>
                                            </div>

                                            <div className="w-full bg-slate-200 rounded-full h-3">
                                                <div
                                                    className="bg-blue-600 h-3 rounded-full"
                                                    style={{ width: item.progress }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="space-y-6">
                            {/* Routine */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                                <h2 className="text-2xl font-semibold text-slate-800 mb-5">
                                    Today's Classes
                                </h2>

                                <div className="space-y-4">
                                    {routine.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all"
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="font-semibold text-slate-700">
                                                    {item.subject}
                                                </h3>
                                                <span className="text-sm text-blue-600 font-medium">
                                                    {item.time}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-500">
                                                Teacher: {item.teacher}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Notice Board */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                                <h2 className="text-2xl font-semibold text-slate-800 mb-5">
                                    Notice Board
                                </h2>

                                <div className="space-y-4">
                                    <div className="bg-blue-50 p-4 rounded-2xl">
                                        <h3 className="font-semibold text-blue-700">
                                            Mid Exam Schedule
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-1">
                                            Mid-term examinations will start from 20 May 2026.
                                        </p>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-2xl">
                                        <h3 className="font-semibold text-green-700">
                                            Science Fair
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-1">
                                            Participate in the annual science fair next week.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



