import { useState } from "react";

import { useSelector } from "react-redux";
import { postdata } from "../../components/postdata";
import { updatedata } from "../../components/update";

const TeacherattendencePage = () => {
    const alldata = useSelector((state) => {
        return state;
    })
    const Teacherattendence = alldata.Teacherattendences.data;
    console.log(Teacherattendence)
    const [open, setOpen] = useState(false);
    const [isEdite, setEdite] = useState(false);
    const [form, setform] = useState({
        TeacherattendenceId: "",
        name: "",
        age: "",
        class: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
    });
    const setdata = (data) => {
        setform(data);
    }
    const clearform = () => {
        setform({
            TeacherattendenceId: "",
            name: "",
            age: "",
            class: "",
            gender: "",
            phone: "",
            email: "",
            address: "",
        })
    }

    const handleonChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setform({ ...form, [name]: value });
    }
    const handlesubmit = () => {
        if (isEdite) {
            updatedata('Teacherattendences', form.TeacherattendenceId, form);
        } else {
            postdata('Teacherattendences', form);
        }
        clearform();
    }

    return (

        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Teacherattendence Management
                    </h1>
                    <p className="text-sm text-gray-500">
                        Add, edit and manage all Teacherattendences
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700"
                >
                    + Add Teacherattendence
                </button>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-5">
                <input
                    type="text"
                    placeholder="Search Teacherattendence..."
                    className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="p-3 text-left">Teacherattendence Id</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Class</th>
                            <th>Gender</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Address</th>
                            <th className="p-3 text-left">Age</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Teacherattendence.map((item, index) => {
                            return <tr key={index} className="border-b hover:bg-gray-50">
                                <td>{item.TeacherattendenceId}</td>
                                <td className="p-3 font-medium">{item.name}</td>
                                <td className="p-3">{item.class}</td>
                                <td className="p-3">{item.gender}</td>
                                <td className="p-3">{item.email}</td>
                                <td className="p-3">{item.address}</td>
                                <td className="p-3">{item.age}</td>
                                <td className="p-3">{item.phone}</td>
                                <td className="p-3 space-x-2">
                                    <button className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg" onClick={() => { setOpen(true); setEdite(true); setdata(item) }}>
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 bg-red-100 text-red-600 rounded-lg">
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        })}
                    </tbody>

                </table>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

                    <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">

                        <h2 className="text-lg font-semibold mb-4">
                            {isEdite ? "Edite" : "Add"} Teacherattendence
                        </h2>

                        <div className="space-y-3">
                            <input
                                value={form.TeacherattendenceId}
                                name="TeacherattendenceId"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Teacherattendence Id"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <input
                                value={form.name}
                                name="name"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Teacherattendence Name"
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
                                value={form.gender}
                                name="gender"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Gender"
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

                            <input
                                value={form.address}
                                name="address"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Address"
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                            <input
                                value={form.age}
                                name="age"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Age"
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                            <input
                                value={form.phone}
                                name="phone"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Phone"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                        </div>

                        <div className="flex justify-end mt-5 space-x-2">

                            <button
                                onClick={() => { setOpen(false); setEdite(false); clearform() }}
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

export default TeacherattendencePage;