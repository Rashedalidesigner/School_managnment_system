import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
                <form className="space-y-4">

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />

                    <input
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