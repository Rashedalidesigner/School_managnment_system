export default function Dashboard() {
    const stats = [
        { title: 'Total Students', value: '2,540', change: '+12%' },
        { title: 'Teachers', value: '148', change: '+4%' },
        { title: 'Attendance', value: '94%', change: '+2%' },
        { title: 'Revenue', value: '$48,200', change: '+8%' },
    ];

    const students = [
        {
            name: 'Ariana Smith',
            class: 'Grade 10',
            attendance: '96%',
            status: 'Active',
        },
        {
            name: 'John Carter',
            class: 'Grade 8',
            attendance: '91%',
            status: 'Active',
        },
        {
            name: 'Emily Johnson',
            class: 'Grade 12',
            attendance: '88%',
            status: 'Pending',
        },
        {
            name: 'Michael Brown',
            class: 'Grade 9',
            attendance: '97%',
            status: 'Active',
        },
    ];

    const activities = [
        'New admission request submitted',
        'Mathematics exam scheduled for Friday',
        'School bus maintenance completed',
        'Parent-teacher meeting updated',
    ];

    return (
        <div className="min-h-screen bg-slate-100 p-6 w-[82%] ml-[18%]">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-800">
                        School Management Dashboard
                    </h1>
                    <p className="text-slate-500 mt-2">
                        Monitor students, teachers, attendance, and school performance.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 rounded-xl border border-slate-200 bg-white shadow-sm outline-none"
                    />

                    <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl shadow-lg">
                        + Add Student
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-500 text-sm">{item.title}</p>
                                <h2 className="text-3xl font-bold mt-2 text-slate-800">
                                    {item.value}
                                </h2>
                            </div>

                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                {item.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                Student Overview
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">
                                Latest student attendance and records.
                            </p>
                        </div>

                        <button className="border border-slate-200 px-4 py-2 rounded-xl text-sm hover:bg-slate-50">
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-slate-500 border-b border-slate-100">
                                    <th className="pb-4">Student</th>
                                    <th className="pb-4">Class</th>
                                    <th className="pb-4">Attendance</th>
                                    <th className="pb-4">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {students.map((student, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-slate-50 hover:bg-slate-50 transition"
                                    >
                                        <td className="py-4 font-medium text-slate-700">
                                            {student.name}
                                        </td>
                                        <td className="py-4 text-slate-600">{student.class}</td>
                                        <td className="py-4 text-slate-600">
                                            {student.attendance}
                                        </td>
                                        <td className="py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${student.status === 'Active'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                    }`}
                                            >
                                                {student.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">
                            Recent Activities
                        </h2>
                        <p className="text-slate-500 text-sm mt-1">
                            School updates and notifications.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-2xl bg-slate-50 border border-slate-100"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-600 mt-2" />
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        {activity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                Fee Collection
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">
                                Monthly payment progress.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {[75, 60, 90, 45].map((progress, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2 text-sm">
                                    <span className="text-slate-600">
                                        Class {index + 6}
                                    </span>
                                    <span className="font-medium text-slate-700">
                                        {progress}%
                                    </span>
                                </div>

                                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                                    <div
                                        className="bg-blue-600 h-full rounded-full"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                Upcoming Events
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">
                                School calendar highlights.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: 'Science Fair',
                                date: '12 May 2026',
                            },
                            {
                                title: 'Sports Day',
                                date: '18 May 2026',
                            },
                            {
                                title: 'Final Examination',
                                date: '25 May 2026',
                            },
                        ].map((event, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100"
                            >
                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {event.date}
                                    </p>
                                </div>

                                <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700 transition">
                                    Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
