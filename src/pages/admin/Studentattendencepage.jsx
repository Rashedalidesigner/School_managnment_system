import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postdata } from "../../components/postdata";
import { updatedata } from "../../components/update";
import axios from "axios";
import { addStudnetattendence, getStudnetattendence, removeStudnetattendence, updateStudnetattendence } from "../../Strore/slices/StudentattendenceSlices";
import { deletedata } from "../../components/deletedata";

const StudentattendencePage = () => {
    const fetchstudentattendence = async () => {
        const backendapi = import.meta.env.VITE_BACKENDAPI;
        const studentattendence = await axios.get(backendapi + 'studentattendence');
        console.log(studentattendence)
        dispatch(getStudnetattendence(studentattendence.data.data));
    };
    const dispatch = useDispatch();

    const assignmentmarksdata = useSelector((state) => {
        return state.studentattendence.data;
    })
    const data = assignmentmarksdata;
    console.log(data)
    const [open, setOpen] = useState(false);
    const [isEdite, setEdite] = useState(false);
    const [form, setform] = useState({
        StudentId: "",
        date: "",
        status: ""
    });
    const setdata = (data) => {
        setform(data);
    }
    const clearform = () => {
        setform({
            StudentId: "",
            date: "",
            status: ""
        })
    }
    useEffect(() => {
        try {
            fetchstudentattendence();
        } catch (error) {
            console.log(error)
        }
    }, []);

    const handleonChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setform({ ...form, [name]: value });
    }
    const handlesubmit = () => {
        if (isEdite) {
            updatedata('studentattendence', form.StudentId, form);
            dispatch(updateStudnetattendence(form));
        } else {
            postdata('studentattendence', form);
            dispatch(addStudnetattendence(form));
        }
        clearform();
    };

    const handledelte = async (item) => {
        const res = await deletedata("studentattendence", item.StudentId);
        dispatch(removeStudnetattendence(item));
        console.log(res);
    }

    console.log(data)

    if (data == []) {
        console.log(data);
        return <h1>Loading ...</h1>
    }

    return (

        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Studentattendence Management
                    </h1>
                    <p className="text-sm text-gray-500">
                        Add, edit and manage all Studentattendences
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700"
                >
                    + Add Studentattendence
                </button>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-5">
                <input
                    type="text"
                    placeholder="Search Studentattendence..."
                    className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="p-3 text-left">Student Id</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => {
                            return <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{item.StudentId}</td>
                                <td className="p-3">{item.date}</td>
                                <td className={item.status === "Present" ? "p-3 text-green-500" : item.status === "Absent" ? "p-3 text-red-500" : "p-3 text-yellow-500"}>
                                    {item.status}
                                </td>
                                <td className="p-3 space-x-2">
                                    <button className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg" onClick={() => { setOpen(true); setEdite(true); setdata(item) }}>
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 bg-red-100 text-red-600 rounded-lg" onClick={() => handledelte(item)}>
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
                            {isEdite ? "Edite" : "Add"} Studentattendence
                        </h2>

                        <div className="space-y-3">
                            <input
                                value={form.StudentId}
                                name="StudentId"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Student Id"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <input
                                value={form.date}
                                name="date"
                                onChange={handleonChange}
                                type="date"
                                placeholder="Date"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <select name="status" id="status" value={form.status} onChange={handleonChange} className="w-full px-4 py-2 border rounded-lg">
                                <option value="">Select Status</option>
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                                <option value="Late">Late</option>
                            </select>

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

export default StudentattendencePage;