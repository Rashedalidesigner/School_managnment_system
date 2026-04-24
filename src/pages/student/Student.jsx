// import Layout from "../../components/Layout";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function StudentDashboard() {
    const [active, setActive] = useState("Student");
    const [open, setOpen] = useState(true);
    return (
        <div className="container height-screen">
            <Sidebar open={open} setActive={setActive} setOpen={setOpen} active={active} className="fixed w-64 left-0 height-screen"
            />
        </div>
    );
}