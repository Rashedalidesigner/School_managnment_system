import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ role, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar role={role} open={open} setOpen={setOpen} />

            <div className="flex-1 flex flex-col">
                <Topbar role={role} setOpen={setOpen} />

                <div className="p-4 overflow-auto">{children}</div>
            </div>
        </div>
    );
}