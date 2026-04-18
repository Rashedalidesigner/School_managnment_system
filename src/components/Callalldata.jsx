import axios from 'axios';


const backendapi = import.meta.env.VITE_BACKENDAPI;

export const user = async () => {
    const userdata = await axios.get(backendapi + 'users');
    return userdata.data;
}
export const student = async () => {
    const studentdata = await axios.get(backendapi + 'students');
    return studentdata.data;
}
export const teacher = async () => {
    const teacherdata = await axios.get(backendapi + 'teachers');
    return teacherdata.data;
}
export const classdata = async () => {
    const classdatas = await axios.get(backendapi + 'classes');
    return classdatas.data;
}
export const assignment = async () => {
    const asiignmentdata = await axios.get(backendapi + 'assignments');
    return asiignmentdata.data;
}
export const assignmentmark = async () => {
    const mark = await axios.get(backendapi + 'assignmentmark');
    return mark.data;
}
export const studentleave = async () => {
    const studentleavedata = await axios.get(backendapi + 'studentLeave');
    return studentleavedata.data;
}
export const studentattendence = async () => {
    const studentattendencedata = await axios.get(backendapi + 'studentAttendence');
    return studentattendencedata.data;
}
export const teacherleave = async () => {
    const teacherleavedata = await axios.get(backendapi + 'teacherLeave');
    return teacherleavedata.data;
}

export const teacherattendence = async () => {
    const teacherattendencedata = await axios.get(backendapi + 'teacherattendence');
    // console.log(teacherattendencedata);
    return teacherattendencedata.data;
}





