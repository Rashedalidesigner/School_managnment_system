export default function StudentDashboardPage() {
    const sidebarItems = [
        'Dashboard',
        'My Courses',
        'Assignments',
        'Attendance',
        'Results',
        'Routine',
        'Messages',
        'Library',
        'Settings',
    ];

    const stats = [
        {
            title: 'Courses',
            value: '08',
            icon: '📚',
        },
        {
            title: 'Assignments',
            value: '14',
            icon: '📝',
        },
        {
            title: 'Attendance',
            value: '95%',
            icon: '📈',
        },
        {
            title: 'CGPA',
            value: '3.89',
            icon: '🏆',
        },
    ];

    const assignments = [
        {
            subject: 'Mathematics',
            deadline: '12 May 2026',
            status: 'Pending',
        },
        {
            subject: 'Physics',
            deadline: '14 May 2026',
            status: 'Completed',
        },
        {
            subject: 'Chemistry',
            deadline: '15 May 2026',
            status: 'Pending',
        },
        {
            subject: 'English',
            deadline: '18 May 2026',
            status: 'Completed',
        },
    ];

    return (
        <div className="flex bg-slate-950 min-h-screen text-white">
            {/* Sidebar */}
            <div className="w-[280px] h-screen bg-slate-900 border-r border-slate-800 fixed left-0 top-0 flex flex-col">
                {/* Logo */}
                <div className="px-6 py-6 border-b border-slate-800">
                    <h1 className="text-2xl font-bold tracking-wide">
                        School<span className="text-cyan-400">MS</span>
                    </h1>

                    <p className="text-slate-400 text-sm mt-1">Student Panel</p>
                </div>

                {/* Student Profile */}
                <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-800">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="student"
                        className="w-14 h-14 rounded-full border-2 border-cyan-400 object-cover"
                    />

                    <div>
                        <h2 className="font-semibold text-lg">Emma Watson</h2>
                        <p className="text-sm text-slate-400">Class 10 Student</p>
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
                            Student <span className="text-cyan-400">Dashboard</span>
                        </h1>

                        <p className="text-slate-400 mt-1">
                            Welcome back, Emma 👋
                        </p>
                    </div>

                    <button className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 px-5 py-3 rounded-2xl font-semibold shadow-lg">
                        View Results
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

                {/* Main Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Performance */}
                    <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-bold">Academic Performance</h2>
                                <p className="text-slate-400 text-sm mt-1">
                                    Weekly study progress overview
                                </p>
                            </div>

                            <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl text-sm">
                                This Week
                            </button>
                        </div>

                        <div className="h-[300px] flex items-end justify-between gap-4 pt-10">
                            {[80, 95, 75, 100, 85, 92, 88].map((height, index) => (
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
                                5 New
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                                <p className="font-medium">Math assignment uploaded</p>
                                <span className="text-sm text-slate-400">15 mins ago</span>
                            </div>

                            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                                <p className="font-medium">Exam routine published</p>
                                <span className="text-sm text-slate-400">1 hour ago</span>
                            </div>

                            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                                <p className="font-medium">Library book returned</p>
                                <span className="text-sm text-slate-400">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assignment Table */}
                <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl overflow-x-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold">Recent Assignments</h2>
                            <p className="text-slate-400 text-sm mt-1">
                                Latest assignment activities
                            </p>
                        </div>

                        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl text-sm font-medium">
                            View All
                        </button>
                    </div>

                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="border-b border-slate-800 text-left text-slate-400">
                                <th className="pb-4">Subject</th>
                                <th className="pb-4">Deadline</th>
                                <th className="pb-4">Status</th>
                                <th className="pb-4">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {assignments.map((assignment, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-slate-800 hover:bg-slate-800/40 transition-all duration-200"
                                >
                                    <td className="py-5 font-medium">{assignment.subject}</td>
                                    <td className="py-5 text-slate-300">{assignment.deadline}</td>

                                    <td className="py-5">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm border ${assignment.status === 'Completed'
                                                    ? 'bg-green-500/20 text-green-400 border-green-500/20'
                                                    : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20'
                                                }`}
                                        >
                                            {assignment.status}
                                        </span>
                                    </td>

                                    <td className="py-5">
                                        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
                                            Open
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
