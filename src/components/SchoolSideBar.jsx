export default function SchoolSidebar() {
    const menuItems = [
        {
            title: "Dashboard",
            icon: "📊",
        },
        {
            title: "Students",
            icon: "👨‍🎓",
        },
        {
            title: "Teachers",
            icon: "👨‍🏫",
        },
        {
            title: "Classes",
            icon: "🏫",
        },
        {
            title: "Attendance",
            icon: "📝",
        },
        {
            title: "Exams",
            icon: "📚",
        },
        {
            title: "Results",
            icon: "📈",
        },
        {
            title: "Finance",
            icon: "💰",
        },
        {
            title: "Library",
            icon: "📖",
        },
        {
            title: "Transport",
            icon: "🚌",
        },
        {
            title: "Messages",
            icon: "💬",
        },
        {
            title: "Settings",
            icon: "⚙️",
        },
    ];

    return (
        <div className="w-[22%] h-screen bg-slate-900 text-white flex flex-col shadow-2xl fixed">
            {/* Logo */}
            <div className="px-6 py-6 border-b border-slate-800">
                <h1 className="text-2xl font-bold tracking-wide">
                    School<span className="text-cyan-400">MS</span>
                </h1>

                <p className="text-slate-400 text-sm mt-1">
                    School Management System
                </p>
            </div>

            {/* Admin Profile */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-800">
                <img
                    src="https://i.pravatar.cc/100"
                    alt="admin"
                    className="w-14 h-14 rounded-full border-2 border-cyan-400 object-cover"
                />

                <div>
                    <h2 className="font-semibold text-lg">Admin Panel</h2>
                    <p className="text-sm text-slate-400">Super Administrator</p>
                </div>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 text-left hover:bg-cyan-500 hover:text-white ${index === 0
                            ? "bg-cyan-500 text-white shadow-lg"
                            : "text-slate-300"
                            }`}
                    >
                        <span className="text-xl">{item.icon}</span>

                        <span className="font-medium">{item.title}</span>
                    </button>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="p-4 border-t border-slate-800 space-y-3">
                <button className="w-full bg-slate-800 hover:bg-slate-700 transition-all duration-200 py-3 rounded-2xl font-medium">
                    Help Center
                </button>

                <button className="w-full bg-red-500 hover:bg-red-600 transition-all duration-200 py-3 rounded-2xl font-semibold">
                    Logout
                </button>
            </div>
        </div>
    );
}