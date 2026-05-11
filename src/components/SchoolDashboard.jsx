export default function SchoolDashboard() {
    const stats = [
        {
            title: 'Total Students',
            value: '1,250',
            icon: '👨‍🎓',
        },
        {
            title: 'Total Teachers',
            value: '85',
            icon: '👨‍🏫',
        },
        {
            title: 'Total Classes',
            value: '32',
            icon: '🏫',
        },
        {
            title: 'Total Revenue',
            value: '$24,500',
            icon: '💰',
        },
    ];

    const students = [
        {
            name: 'Emma Watson',
            class: 'Class 10',
            attendance: '98%',
        },
        {
            name: 'John Smith',
            class: 'Class 9',
            attendance: '95%',
        },
        {
            name: 'Sophia Lee',
            class: 'Class 8',
            attendance: '97%',
        },
        {
            name: 'Michael Brown',
            class: 'Class 7',
            attendance: '92%',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white p-6 w-[78%] ml-[22%]">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold">
                        School <span className="text-cyan-400">Dashboard</span>
                    </h1>
                    <p className="text-slate-400 mt-1">
                        Welcome back, Admin 👋
                    </p>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 px-5 py-3 rounded-2xl font-semibold shadow-lg">
                    + Add Student
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-cyan-500 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-400 text-sm">{item.title}</p>
                                <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl border border-cyan-500/30">
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Attendance Chart */}
                <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold">Attendance Overview</h2>
                            <p className="text-slate-400 text-sm mt-1">
                                Weekly student attendance report
                            </p>
                        </div>

                        <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl text-sm">
                            This Week
                        </button>
                    </div>

                    <div className="h-[320px] flex items-end justify-between gap-4 pt-10">
                        {[70, 90, 80, 100, 85, 95, 75].map((height, index) => (
                            <div
                                key={index}
                                className="flex-1 bg-cyan-500 rounded-t-3xl hover:bg-cyan-400 transition-all duration-200"
                                style={{ height: `${height}%` }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Notifications</h2>
                        <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                            4 New
                        </span>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                            <p className="font-medium">New admission request</p>
                            <span className="text-sm text-slate-400">5 mins ago</span>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                            <p className="font-medium">Exam schedule updated</p>
                            <span className="text-sm text-slate-400">20 mins ago</span>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                            <p className="font-medium">Teacher meeting at 3PM</p>
                            <span className="text-sm text-slate-400">1 hour ago</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Student Table */}
            <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl overflow-x-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold">Recent Students</h2>
                        <p className="text-slate-400 text-sm mt-1">
                            Latest enrolled students
                        </p>
                    </div>

                    <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl text-sm font-medium">
                        View All
                    </button>
                </div>

                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="text-left border-b border-slate-800 text-slate-400">
                            <th className="pb-4">Student Name</th>
                            <th className="pb-4">Class</th>
                            <th className="pb-4">Attendance</th>
                            <th className="pb-4">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student, index) => (
                            <tr
                                key={index}
                                className="border-b border-slate-800 hover:bg-slate-800/40 transition-all duration-200"
                            >
                                <td className="py-5 font-medium">{student.name}</td>
                                <td className="py-5 text-slate-300">{student.class}</td>
                                <td className="py-5 text-cyan-400 font-semibold">
                                    {student.attendance}
                                </td>
                                <td className="py-5">
                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/20">
                                        Active
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
