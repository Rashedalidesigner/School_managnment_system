import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/admin/Admin";
import TeacherDashboard from "./pages/teacher/Teacher";
import StudentDashboard from "./pages/student/Student";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
import useCallalldata from "./components/callalldata";
import StudentPage from "./pages/admin/Studentpage";




const App = () => {
  useCallalldata();


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
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />
        <Route path="admin/student" element={<StudentPage />} />

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