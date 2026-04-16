import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/UserSlices.jsx';
import TeacherSlices from './slices/TeacherSlices.jsx';
import TeacherLeaveSlice from './slices/TeacherLeave.jsx';
import Teacherattendence from './slices/TeacherattendenceSlices.jsx';
import studentSlice from './slices/StudentSlices.jsx';
import studentleave from './slices/StudentLeaveSlices.jsx';
import studentattendence from './slices/StudentattendenceSlices.jsx';
import assignments from './slices/AssignmentSlices.jsx';
import mark from './slices/MarkSlices.jsx';
import classslice from './slices/ClassSlices.jsx';


const store = configureStore({
    reducer: {
        users: userSlice,
        teachers: TeacherSlices,
        teacherleave: TeacherLeaveSlice,
        teacherattendence: Teacherattendence,
        students: studentSlice,
        studentleave: studentleave,
        studentattendence: studentattendence,
        assignments: assignments,
        mark: mark,
        classslices: classslice,
    }
});

export default store;