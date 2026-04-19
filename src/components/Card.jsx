import { Users, GraduationCap, DollarSign } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, color }) => {
    return (
        <div className={`p-5 rounded-2xl shadow-md text-white ${color} hover:scale-105 transition`}>

            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm opacity-80">{title}</p>
                    <h2 className="text-2xl font-bold">{value}</h2>
                </div>

                <div className="bg-white/20 p-3 rounded-xl">
                    <Icon size={28} />
                </div>
            </div>

        </div>
    );
};

export default StatCard;