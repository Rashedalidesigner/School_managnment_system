// import Layout from "../../components/Layout";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function TeacherDashboard() {
    const [active, setActive] = useState("Teacher");
    const [open, setOpen] = useState(true);
    return (
        <div className="container mx-auto height-screen">
            <Sidebar open={open} setActive={setActive} setOpen={setOpen} active={active} className="fixed w-64 left-0 height-full"
            />
        </div>
    );
}