import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postdata } from "./postdata";
// import { set } from "mongoose";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        useremail: "",
        phone: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await postdata('users', formData);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        setFormData({
            username: "",
            useremail: "",
            phone: "",
            password: "",
        });
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md">

                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Register
                </h2>

                <p className="text-sm text-center text-gray-500 mb-6">
                    Create your account
                </p>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        name="useremail"
                        value={formData.useremail}
                        onChange={handleChange}
                    />

                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                    >
                        Register
                    </button>

                </form>

                <p className="text-sm text-center mt-4 text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Register;