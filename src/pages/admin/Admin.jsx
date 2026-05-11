
import { Outlet } from "react-router-dom";
import SchoolSidebar from "../../components/SchoolSideBar";


export default function AdminDashboard() {
    return (
        <div className="h-screen bg-gray-100">
            <div className="relative">
                <SchoolSidebar />
                <Outlet />
            </div>
        </div >
    );
}
