import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import { use, useEffect, useState } from "react";
import { Home, Users, BookOpen, ClipboardList, CheckSquare, Calendar, UserCheck, FileText, DollarSign, Menu } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";
import StatCard from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { GraduationCap } from "lucide-react";
import axios from "axios";
import { getStudnetattendence } from "../../Strore/slices/StudentattendenceSlices";
import { getTeacherattendence } from "../../Strore/slices/TeacherattendenceSlices";
import { getStudentleave } from "../../Strore/slices/StudentLeaveSlices";
import { getTeacherLeave } from "../../Strore/slices/TeacherLeave";
import { getmark } from "../../Strore/slices/MarkSlices";
import { getFee } from "../../Strore/slices/FeeSlices";
import { getUser } from "../../Strore/slices/UserSlices";
import { getclass } from "../../Strore/slices/ClassSlices";
import { getTeacher } from "../../Strore/slices/TeacherSlices";
import { getStudent } from "../../Strore/slices/StudentSlices";
import { getassignment } from "../../Strore/slices/AssignmentSlices";


export default function AdminDashboard() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const [active, setActive] = useState("Dashboard");
    const [admin, setAdmin] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/admin") {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }, [location]);
    const [open, setOpen] = useState(true);
    const fetchdata = async () => {
        const backendapi = import.meta.env.VITE_BACKENDAPI;
        const asiignmentdata = await axios.get(backendapi + 'assignments');
        const studentattendence = await axios.get(backendapi + 'studentattendence');
        const teacherattendence = await axios.get(backendapi + 'teacherattendence');
        const studentleave = await axios.get(backendapi + 'studentleave');
        const teacherleave = await axios.get(backendapi + 'teacherleave');
        const assignmentmark = await axios.get(backendapi + 'assignmentmark');
        const fee = await axios.get(backendapi + 'fee');
        const students = await axios.get(backendapi + 'students');
        const teachers = await axios.get(backendapi + 'teachers');
        const classes = await axios.get(backendapi + 'classes');
        const users = await axios.get(backendapi + 'users');
        dispatch(getassignment(asiignmentdata.data.data));
        dispatch(getStudnetattendence(studentattendence.data.data));
        dispatch(getTeacherattendence(teacherattendence.data.data));
        dispatch(getStudentleave(studentleave.data.data));
        dispatch(getTeacherLeave(teacherleave.data.data));
        dispatch(getmark(assignmentmark.data.data));
        dispatch(getFee(fee.data.data));
        dispatch(getStudent(students.data.data));
        dispatch(getTeacher(teachers.data.data));
        dispatch(getclass(classes.data.data));
        dispatch(getUser(users.data.data));
    }
    useEffect(() => {

        try {

            fetchdata();
        } catch (error) {
            console.log(error)
        }
    }, []);
    return (
        <div className="flex h-screen bg-gray-100 relative">
            {/* sidebar */}
            <Sidebar open={open} setActive={setActive} setOpen={setOpen} active={active} className="fixed w-64 left-0" />

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-4">{active}</h1>
                <section className={active ? "" : "hidden"}>
                    <div className="p-6 bg-gray-50 min-h-screen">

                        <h1 className="text-2xl font-semibold mb-6">
                            Dashboard Overview
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            <StatCard
                                title="Total Students"
                                value={data.students.data?.length || 0}
                                icon={Users}
                                color="bg-gradient-to-r from-blue-500 to-blue-700"
                            />

                            <StatCard
                                title="Total Teachers"
                                value={data.teachers.data?.length || 0}
                                icon={GraduationCap}
                                color="bg-gradient-to-r from-green-500 to-green-700"
                            />
                            <StatCard
                                title="Total Classes"
                                value={data.classslices.data?.length || 0}
                                icon={BookOpen}
                                color="bg-gradient-to-r from-yellow-500 to-yellow-700"
                            />
                            <StatCard
                                title="Total Users"
                                value={data.users.data?.length || 0}
                                icon={Users}
                                color="bg-gradient-to-r from-blue-500 to-blue-700"
                            />
                            <StatCard
                                title="Total Students Attendence"
                                value={data.studentattendence.data?.length || 0}
                                icon={GraduationCap}
                                color="bg-gradient-to-r from-green-500 to-green-700"
                            />
                            <StatCard
                                title="Total Teachers Attendence"
                                value={data.teacherattendence.data?.length || 0}
                                icon={GraduationCap}
                                color="bg-gradient-to-r from-green-500 to-green-700"
                            />

                            <StatCard
                                title="Total Assignments"
                                value={data.assignments.data?.length || 0}
                                icon={ClipboardList}
                                color="bg-gradient-to-r from-yellow-500 to-yellow-700"
                            />
                            {console.log(data)}
                            <StatCard
                                title="Total Fees"
                                value={`৳ ${data.fee.data?.reduce((a, b) => a + (b.amount || 0), 0) || 0}`}
                                icon={DollarSign}
                                color="bg-gradient-to-r from-purple-500 to-purple-700"
                            />

                        </div>

                    </div>
                </section>
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h1 className="text-xl text-center">Admin Dashboard</h1>


                    <Outlet />
                </div>
            </div >
        </div >
    );
}
