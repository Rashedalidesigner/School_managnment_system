import React, { useState } from "react";
import Layout from "../../components/Layout";

const StudentPage = () => {
    const [open, setOpen] = useState(false);
    const [form, setform] = useState({
        name: "",
        class: "",
        roll: "",
        email: ""
    })
    const handleonChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setform({ ...form, [name]: value });
    }
    const handlesubmit = () => {
        console.log(form);
        setform({
            name: "",
            class: "",
            roll: "",
            email: ""
        })
    }

    return (

        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Student Management
                    </h1>
                    <p className="text-sm text-gray-500">
                        Add, edit and manage all students
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700"
                >
                    + Add Student
                </button>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-5">
                <input
                    type="text"
                    placeholder="Search student..."
                    className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Class</th>
                            <th className="p-3 text-left">Roll</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[1, 2, 3, 4].map((item) => (
                            <tr key={item} className="border-b hover:bg-gray-50">

                                <td className="p-3 font-medium">Student {item}</td>
                                <td className="p-3">Class {item}</td>
                                <td className="p-3">0{item}</td>
                                <td className="p-3">student{item}@mail.com</td>

                                <td className="p-3 space-x-2">
                                    <button className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg">
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 bg-red-100 text-red-600 rounded-lg">
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

                    <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">

                        <h2 className="text-lg font-semibold mb-4">
                            Add Student
                        </h2>

                        <div className="space-y-3">

                            <input
                                value={form.name}
                                name="name"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Student Name"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <input
                                value={form.class}
                                name="class"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Class"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <input
                                value={form.roll}
                                name="roll"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Roll"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <input
                                value={form.email}
                                name="email"
                                onChange={handleonChange}
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                        </div>

                        <div className="flex justify-end mt-5 space-x-2">

                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 border rounded-lg"
                            >
                                Cancel
                            </button>

                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg" onClick={handlesubmit}>
                                Save
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </div>

    );
};

export default StudentPage;