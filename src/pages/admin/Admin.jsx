
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { Home, Users, BookOpen, ClipboardList, CheckSquare, Calendar, UserCheck, FileText, DollarSign, Menu } from "lucide-react";
import { Outlet } from "react-router-dom";
import StatCard from "../../components/Card";
import { useDispatch } from "react-redux";
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

    const [active, setActive] = useState("Admin");


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
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h1 className="text-xl text-center">Admin Dashboard</h1>
                    <Outlet />
                </div>
            </div >
        </div >
    );
}
