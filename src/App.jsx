import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/admin/Admin";
import TeacherDashboard from "./pages/teacher/Teacher";
import StudentDashboard from "./pages/student/Student";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
// import useCallalldata from "./components/callalldata";
import StudentPage from "./pages/admin/Studentpage";
import TeacherattendencePage from "./pages/admin/Teacherattendencepage";
import ClassroomPage from "./pages/admin/Classpage";
import AssignmentPage from "./pages/admin/Assignmentpage";
import StudentattendencePage from "./pages/admin/Studentattendencepage";
import StudentleavePage from "./pages/admin/Studentleavepage";
import TeacherleavePage from "./pages/admin/TeacherLeavepage";
import UserPage from "./pages/admin/Userpage";
import AssignmentmarkPage from "./pages/admin/Assignmentmark";
import FeePage from "./pages/admin/Feepage";
import TeacherPage from "./pages/admin/Teacherpage";




const App = () => {
  // useCallalldata();

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 🔐 Protected Routes */}
        <Route path="/admin" element={<AdminDashboard />} >
          <Route path="students" element={<StudentPage />} />
          <Route path="teachers" element={< TeacherPage />} />
          <Route path="classes" element={<ClassroomPage />} />
          <Route path="assignments" element={<AssignmentPage />} />
          <Route path="student-attendance" element={<StudentattendencePage />} />
          <Route path="teacher-attendance" element={<TeacherattendencePage />} />
          <Route path="student-leave" element={<StudentleavePage />} />
          <Route path="teacher-leave" element={<TeacherleavePage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="marks" element={<AssignmentmarkPage />} />
          <Route path="fees" element={<FeePage />} />
        </Route>

        <Route
          path="/teachers"
          element={
            // <ProtectedRoute>
            <TeacherDashboard />
            // </ProtectedRoute>
          }
        />

        <Route
          path="/students"
          element={
            // <ProtectedRoute role="admin">
            <StudentDashboard />

            // </ProtectedRoute>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;