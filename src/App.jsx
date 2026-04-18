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
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 🔐 Protected Routes */}
        <Route
          path="/admin"
          element={
            // <ProtectedRoute>
            <AdminDashboard />
            // </ProtectedRoute>
          }
        />
        <Route path="admin/students" element={<StudentPage />} />
        <Route path="/admin/teachers" element={< TeacherPage />} />
        <Route path="/admin/classes" element={<ClassroomPage />} />
        <Route path="/admin/assignment" element={<AssignmentPage />} />
        <Route path="/admin/studentattendence" element={<StudentattendencePage />} />
        <Route path="/admin/teacherattendence" element={<TeacherattendencePage />} />
        <Route path="/admin/studentleave" element={<StudentleavePage />} />
        <Route path="/admin/teacherleave" element={<TeacherleavePage />} />
        <Route path="/admin/user" element={<UserPage />} />
        <Route path="admin/assignmentmark" element={<AssignmentmarkPage />} />
        <Route path="admin/Fees" element={<FeePage />} />


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