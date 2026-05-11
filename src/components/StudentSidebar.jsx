export function StudentSidebar() {
    const menuItems = [
        'Dashboard',
        'My Profile',
        'Attendance',
        'Assignments',
        'Exam Results',
        'Class Schedule',
        'Messages',
        'Settings',
    ];

    return (
        <div className="w-[16%] min-h-screen bg-slate-900 text-white p-6 flex flex-col justify-between fixed">
            <div>
                <div className="mb-10">
                    <h1 className="text-3xl font-bold">EduManage</h1>
                    <p className="text-slate-400 text-sm mt-2">
                        Student Portal Dashboard
                    </p>
                </div>

                <div className="space-y-3">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition text-left ${item === 'Attendance'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'hover:bg-slate-800 text-slate-300'
                                }`}
                        >
                            <div className="w-2 h-2 rounded-full bg-current" />
                            <span className="font-medium">{item}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-slate-800 rounded-3xl p-5 mt-10 border border-slate-700">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-xl font-bold">
                        RS
                    </div>

                    <div>
                        <h3 className="font-semibold">Rashed Ali</h3>
                        <p className="text-sm text-slate-400">Grade 10 Student</p>
                    </div>
                </div>

                <button className="w-full mt-5 bg-red-500 hover:bg-red-600 transition py-3 rounded-2xl font-medium">
                    Logout
                </button>
            </div>
        </div>
    );
}