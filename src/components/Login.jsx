import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        useremail: "",
        password: "",
    });
    const handleonchange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseurl = import.meta.env.VITE_BACKENDAPI;
        const login_url = baseurl + "users/login";
        const res = await axios.post(login_url, loginData);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res.data.user);
        if (res.data.user.usertype === "Admin") {
            navigate("/admin");
        } else if (res.data.user.usertype === "Teacher") {
            navigate("/teachers");
        } else {
            navigate("/students");
        }
        setLoginData({
            useremail: "",
            password: "",
        });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md">

                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Login
                </h2>

                <p className="text-sm text-center text-gray-500 mb-6">
                    Welcome back to School System
                </p>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <input
                        name="useremail"
                        value={loginData.useremail}
                        onChange={handleonchange}
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />

                    <input
                        name="password"
                        value={loginData.password}
                        onChange={handleonchange}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                    >
                        Login
                    </button>

                </form>

                <p className="text-sm text-center mt-4 text-gray-500">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-indigo-600">
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;