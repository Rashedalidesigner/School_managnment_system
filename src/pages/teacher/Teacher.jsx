export default function TeacherDashboardPage() {
    const sidebarItems = [
        'Dashboard',
        'My Classes',
        'Students',
        'Attendance',
        'Assignments',
        'Exams',
        'Routine',
        'Messages',
        'Settings',
    ];

    const stats = [
        {
            title: 'Total Students',
            value: '320',
            icon: '👨‍🎓',
        },
        {
            title: 'Classes Taken',
            value: '24',
            icon: '🏫',
        },
        {
            title: 'Assignments',
            value: '18',
            icon: '📚',
        },
        {
            title: 'Attendance',
            value: '96%',
            icon: '📈',
        },
    ];

    const students = [
        {
            name: 'Emma Watson',
            class: 'Class 10',
            status: 'Present',
        },
        {
            name: 'Michael Brown',
            class: 'Class 9',
            status: 'Present',
        },
        {
            name: 'Sophia Lee',
            class: 'Class 8',
            status: 'Absent',
        },
        {
            name: 'John Smith',
            class: 'Class 7',
            status: 'Present',
        },
    ];

    return (
        <div className="flex bg-slate-950 min-h-screen text-white">
            {/* Sidebar */}
            <div className="w-[280px] h-screen bg-slate-900 border-r border-slate-800 flex flex-col fixed left-0 top-0">
                {/* Logo */}
                <div className="px-6 py-6 border-b border-slate-800">
                    <h1 className="text-2xl font-bold tracking-wide">
                        School<span className="text-cyan-400">MS</span>
                    </h1>

                    <p className="text-slate-400 text-sm mt-1">Teacher Panel</p>
                </div>

                {/* Teacher Info */}
                <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-800">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="teacher"
                        className="w-14 h-14 rounded-full border-2 border-cyan-400 object-cover"
                    />

                    <div>
                        <h2 className="font-semibold text-lg">John Doe</h2>
                        <p className="text-sm text-slate-400">Math Teacher</p>
                    </div>
                </div>

                {/* Menu */}
                <div className="flex-1 px-4 py-5 space-y-2 overflow-y-auto">
                    {sidebarItems.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 font-medium ${index === 0
                                    ? 'bg-cyan-500 text-white shadow-lg'
                                    : 'text-slate-300 hover:bg-cyan-500 hover:text-white'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Logout */}
                <div className="p-4 border-t border-slate-800">
                    <button className="w-full bg-red-500 hover:bg-red-600 transition-all duration-200 py-3 rounded-2xl font-semibold">
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-[280px] flex-1 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Teacher <span className="text-cyan-400">Dashboard</span>
                        </h1>

                        <p className="text-slate-400 mt-1">
                            Welcome back, John 👋
                        </p>
                    </div>

                    <button className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 px-5 py-3 rounded-2xl font-semibold shadow-lg">
                        + Create Assignment
                    </button>
                </div>

                {/* Stats */}
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

                {/* Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Attendance Chart */}
                    <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-bold">Weekly Attendance</h2>
                                <p className="text-slate-400 text-sm mt-1">
                                    Student attendance performance
                                </p>
                            </div>

                            <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl text-sm">
                                This Week
                            </button>
                        </div>

                        <div className="h-[300px] flex items-end justify-between gap-4 pt-10">
                            {[75, 90, 85, 100, 95, 88, 78].map((height, index) => (
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
                                3 New
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                                <p className="font-medium">New assignment submitted</p>
                                <span className="text-sm text-slate-400">10 mins ago</span>
                            </div>

                            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                                <p className="font-medium">Meeting at 2 PM</p>
                                <span className="text-sm text-slate-400">30 mins ago</span>
                            </div>

                            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                                <p className="font-medium">Exam schedule published</p>
                                <span className="text-sm text-slate-400">1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Table */}
                <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl overflow-x-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold">Today's Students</h2>
                            <p className="text-slate-400 text-sm mt-1">
                                Student attendance list
                            </p>
                        </div>

                        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl text-sm font-medium">
                            View All
                        </button>
                    </div>

                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="border-b border-slate-800 text-left text-slate-400">
                                <th className="pb-4">Student Name</th>
                                <th className="pb-4">Class</th>
                                <th className="pb-4">Status</th>
                                <th className="pb-4">Action</th>
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

                                    <td className="py-5">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm border ${student.status === 'Present'
                                                    ? 'bg-green-500/20 text-green-400 border-green-500/20'
                                                    : 'bg-red-500/20 text-red-400 border-red-500/20'
                                                }`}
                                        >
                                            {student.status}
                                        </span>
                                    </td>

                                    <td className="py-5">
                                        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
