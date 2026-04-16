import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getassignment } from '../Strore/slices/AssignmentSlices.jsx';
import { getclass } from '../Strore/slices/ClassSlices.jsx';
import { getmark } from '../Strore/slices/MarkSlices.jsx';
import { getStudnetattendence } from '../Strore/slices/StudentattendenceSlices.jsx';
import { getStudentleave } from '../Strore/slices/StudentLeaveSlices.jsx';
import { getStudent } from '../Strore/slices/StudentSlices.jsx';
import { getTeacherattendence } from '../Strore/slices/TeacherattendenceSlices.jsx';
import { getTeacherLeave } from '../Strore/slices/TeacherLeave.jsx';
import { getTeacher } from '../Strore/slices/TeacherSlices.jsx';
import { getUser } from '../Strore/slices/UserSlices.jsx';

const useCallalldata = () => {
    const dispatch = useDispatch();
    const backendapi = import.meta.env.VITE_BACKENDAPI;
    const fetchdata = async () => {
        const user = await axios.get(backendapi + 'users');
        const student = await axios.get(backendapi + 'students');
        const teacher = await axios.get(backendapi + 'teachers');
        const classdata = await axios.get(backendapi + 'classes');
        const asiignment = await axios.get(backendapi + 'assignments');
        const mark = await axios.get(backendapi + 'assignmentmark');
        const studentleave = await axios.get(backendapi + 'studentLeave');
        const studentattendence = await axios.get(backendapi + 'studentAttendence');
        const teacherleave = await axios.get(backendapi + 'teacherLeave');
        const teacherattendence = await axios.get(backendapi + 'teacherattendence');

        dispatch(getassignment(asiignment.data.data));
        dispatch(getclass(classdata.data.data));
        dispatch(getmark(mark.data.data));
        dispatch(getStudnetattendence(studentattendence.data.data));
        dispatch(getStudentleave(studentleave.data.data));
        dispatch(getStudent(student.data.data));
        dispatch(getTeacherattendence(teacherattendence.data.data));
        dispatch(getTeacherLeave(teacherleave.data.data));
        dispatch(getTeacher(teacher.data.data));
        dispatch(getUser(user.data.data));
    };

    useEffect(() => {
        fetchdata();
    }, []);
};

export default useCallalldata;