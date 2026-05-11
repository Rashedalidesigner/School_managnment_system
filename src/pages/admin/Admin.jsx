
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { Home, Users, BookOpen, ClipboardList, CheckSquare, Calendar, UserCheck, FileText, DollarSign, Menu } from "lucide-react";
import { Outlet } from "react-router-dom";
import StatCard from "../../components/Card";
import { GraduationCap } from "lucide-react";

import Dashboard from "./Dashbord";


export default function AdminDashboard() {
    const [active, setActive] = useState("Admin");
    const [open, setOpen] = useState(true);
    return (
        <div className="h-screen bg-gray-100">
            <div className="relative">
                <Sidebar open={open} setActive={setActive} setOpen={setOpen} active={active} />
                <Outlet />
            </div>
        </div >
    );
}
