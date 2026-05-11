import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export function StudentAttendancePage() {
    const [active, setActive] = useState("Student");
    const [open, setOpen] = useState(true);
    const attendanceData = [
        {
            id: 1,
            name: 'Ariana Smith',
            class: 'Grade 10',
            roll: '1024',
            status: 'Present',
            time: '08:10 AM',
        },
        {
            id: 2,
            name: 'John Carter',
            class: 'Grade 8',
            roll: '2045',
            status: 'Absent',
            time: '--',
        },
        {
            id: 3,
            name: 'Emily Johnson',
            class: 'Grade 12',
            roll: '3088',
            status: 'Late',
            time: '08:45 AM',
        },
        {
            id: 4,
            name: 'Michael Brown',
            class: 'Grade 9',
            roll: '4012',
            status: 'Present',
            time: '08:02 AM',
        },
    ];

    return <>
        <div className="container w-full ">
            <Sidebar open={open} setActive={setActive} setOpen={setOpen} active={active} />
            <div className="min-h-screen bg-slate-100 p-6 w-[84%] ml-[16%]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-800">
                            Student Attendance
                        </h1>
                        <p className="text-slate-500 mt-2">
                            Track daily attendance records and monitor student presence.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="Search student..."
                            className="px-4 py-3 rounded-2xl border border-slate-200 bg-white outline-none shadow-sm"
                        />

                        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-2xl shadow-lg">
                            + Add Attendance
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-sm">Present Students</p>
                        <h2 className="text-4xl font-bold text-green-600 mt-3">1,845</h2>
                        <p className="text-green-500 text-sm mt-2">+5% from yesterday</p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-sm">Absent Students</p>
                        <h2 className="text-4xl font-bold text-red-500 mt-3">142</h2>
                        <p className="text-red-400 text-sm mt-2">-2% from yesterday</p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-sm">Late Arrivals</p>
                        <h2 className="text-4xl font-bold text-yellow-500 mt-3">38</h2>
                        <p className="text-yellow-500 text-sm mt-2">+1% from yesterday</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 overflow-x-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                Attendance Records
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">
                                Daily attendance information for all students.
                            </p>
                        </div>

                        <select className="px-4 py-2 rounded-xl border border-slate-200 bg-white outline-none">
                            <option>Today</option>
                            <option>This Week</option>
                            <option>This Month</option>
                        </select>
                    </div>

                    <table className="w-full min-w-[700px]">
                        <thead>
                            <tr className="border-b border-slate-100 text-left text-slate-500">
                                <th className="pb-4">Student Name</th>
                                <th className="pb-4">Class</th>
                                <th className="pb-4">Roll</th>
                                <th className="pb-4">Check In</th>
                                <th className="pb-4">Status</th>
                                <th className="pb-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {attendanceData.map((student) => (
                                <tr
                                    key={student.id}
                                    className="border-b border-slate-50 hover:bg-slate-50 transition"
                                >
                                    <td className="py-5 font-semibold text-slate-700">
                                        {student.name}
                                    </td>
                                    <td className="py-5 text-slate-600">{student.class}</td>
                                    <td className="py-5 text-slate-600">{student.roll}</td>
                                    <td className="py-5 text-slate-600">{student.time}</td>

                                    <td className="py-5">
                                        <span
                                            className={`px-4 py-2 rounded-full text-xs font-semibold ${student.status === 'Present'
                                                ? 'bg-green-100 text-green-700'
                                                : student.status === 'Absent'
                                                    ? 'bg-red-100 text-red-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                        >
                                            {student.status}
                                        </span>
                                    </td>

                                    <td className="py-5">
                                        <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition text-sm font-medium">
                                            View
                                        </button>
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

// export default function SchoolManagementDashboard() {
//     const stats = [
//         { title: 'Total Students', value: '2,540', change: '+12%' },
//         { title: 'Teachers', value: '148', change: '+4%' },
//         { title: 'Attendance', value: '94%', change: '+2%' },
//         { title: 'Revenue', value: '$48,200', change: '+8%' },
//     ];

//     const students = [
//         {
//             name: 'Ariana Smith',
//             class: 'Grade 10',
//             attendance: '96%',
//             status: 'Active',
//         },
//         {
//             name: 'John Carter',
//             class: 'Grade 8',
//             attendance: '91%',
//             status: 'Active',
//         },
//         {
//             name: 'Emily Johnson',
//             class: 'Grade 12',
//             attendance: '88%',
//             status: 'Pending',
//         },
//         {
//             name: 'Michael Brown',
//             class: 'Grade 9',
//             attendance: '97%',
//             status: 'Active',
//         },
//     ];

//     const activities = [
//         'New admission request submitted',
//         'Mathematics exam scheduled for Friday',
//         'School bus maintenance completed',
//         'Parent-teacher meeting updated',
//     ];

//     return (
//         <div className="min-h-screen bg-slate-100 p-6">
//             <div className="flex items-center justify-between mb-8">
//                 <div>
//                     <h1 className="text-4xl font-bold text-slate-800">
//                         School Management Dashboard
//                     </h1>
//                     <p className="text-slate-500 mt-2">
//                         Monitor students, teachers, attendance, and school performance.
//                     </p>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="px-4 py-2 rounded-xl border border-slate-200 bg-white shadow-sm outline-none"
//                     />

//                     <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl shadow-lg">
//                         + Add Student
//                     </button>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//                 {stats.map((item, index) => (
//                     <div
//                         key={index}
//                         className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
//                     >
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <p className="text-slate-500 text-sm">{item.title}</p>
//                                 <h2 className="text-3xl font-bold mt-2 text-slate-800">
//                                     {item.value}
//                                 </h2>
//                             </div>

//                             <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//                                 {item.change}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
//                 <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
//                     <div className="flex items-center justify-between mb-6">
//                         <div>
//                             <h2 className="text-2xl font-bold text-slate-800">
//                                 Student Overview
//                             </h2>
//                             <p className="text-slate-500 text-sm mt-1">
//                                 Latest student attendance and records.
//                             </p>
//                         </div>

//                         <button className="border border-slate-200 px-4 py-2 rounded-xl text-sm hover:bg-slate-50">
//                             View All
//                         </button>
//                     </div>

//                     <div className="overflow-x-auto">
//                         <table className="w-full">
//                             <thead>
//                                 <tr className="text-left text-slate-500 border-b border-slate-100">
//                                     <th className="pb-4">Student</th>
//                                     <th className="pb-4">Class</th>
//                                     <th className="pb-4">Attendance</th>
//                                     <th className="pb-4">Status</th>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {students.map((student, index) => (
//                                     <tr
//                                         key={index}
//                                         className="border-b border-slate-50 hover:bg-slate-50 transition"
//                                     >
//                                         <td className="py-4 font-medium text-slate-700">
//                                             {student.name}
//                                         </td>
//                                         <td className="py-4 text-slate-600">{student.class}</td>
//                                         <td className="py-4 text-slate-600">
//                                             {student.attendance}
//                                         </td>
//                                         <td className="py-4">
//                                             <span
//                                                 className={`px-3 py-1 rounded-full text-xs font-semibold ${student.status === 'Active'
//                                                         ? 'bg-green-100 text-green-700'
//                                                         : 'bg-yellow-100 text-yellow-700'
//                                                     }`}
//                                             >
//                                                 {student.status}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
//                     <div className="mb-6">
//                         <h2 className="text-2xl font-bold text-slate-800">
//                             Recent Activities
//                         </h2>
//                         <p className="text-slate-500 text-sm mt-1">
//                             School updates and notifications.
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         {activities.map((activity, index) => (
//                             <div
//                                 key={index}
//                                 className="p-4 rounded-2xl bg-slate-50 border border-slate-100"
//                             >
//                                 <div className="flex items-start gap-3">
//                                     <div className="w-3 h-3 rounded-full bg-blue-600 mt-2" />
//                                     <p className="text-slate-700 text-sm leading-relaxed">
//                                         {activity}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
//                     <div className="flex items-center justify-between mb-6">
//                         <div>
//                             <h2 className="text-2xl font-bold text-slate-800">
//                                 Fee Collection
//                             </h2>
//                             <p className="text-slate-500 text-sm mt-1">
//                                 Monthly payment progress.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="space-y-5">
//                         {[75, 60, 90, 45].map((progress, index) => (
//                             <div key={index}>
//                                 <div className="flex justify-between mb-2 text-sm">
//                                     <span className="text-slate-600">
//                                         Class {index + 6}
//                                     </span>
//                                     <span className="font-medium text-slate-700">
//                                         {progress}%
//                                     </span>
//                                 </div>

//                                 <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
//                                     <div
//                                         className="bg-blue-600 h-full rounded-full"
//                                         style={{ width: `${progress}%` }}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
//                     <div className="flex items-center justify-between mb-6">
//                         <div>
//                             <h2 className="text-2xl font-bold text-slate-800">
//                                 Upcoming Events
//                             </h2>
//                             <p className="text-slate-500 text-sm mt-1">
//                                 School calendar highlights.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="space-y-4">
//                         {[
//                             {
//                                 title: 'Science Fair',
//                                 date: '12 May 2026',
//                             },
//                             {
//                                 title: 'Sports Day',
//                                 date: '18 May 2026',
//                             },
//                             {
//                                 title: 'Final Examination',
//                                 date: '25 May 2026',
//                             },
//                         ].map((event, index) => (
//                             <div
//                                 key={index}
//                                 className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100"
//                             >
//                                 <div>
//                                     <h3 className="font-semibold text-slate-800">
//                                         {event.title}
//                                     </h3>
//                                     <p className="text-sm text-slate-500 mt-1">
//                                         {event.date}
//                                     </p>
//                                 </div>

//                                 <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700 transition">
//                                     Details
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
