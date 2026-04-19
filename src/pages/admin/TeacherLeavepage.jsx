import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postdata } from "../../components/postdata";
import { updatedata } from "../../components/update";
import axios from "axios";
import { addTeacherLeave, getTeacherLeave, removeTeacherLeave, updateTeacherLeave } from "../../Strore/slices/TeacherLeave";
import { deletedata } from "../../components/deletedata";

const TeacherleavePage = () => {
    const fetcherteacherleave = async () => {
        const backendapi = import.meta.env.VITE_BACKENDAPI;
        const asiignmentdata = await axios.get(backendapi + 'teacherLeave');

        dispatch(getTeacherLeave(asiignmentdata.data.data));
    };
    const dispatch = useDispatch();

    const assignmentmarksdata = useSelector((state) => {
        return state.teacherleave.data;
    })
    const data = assignmentmarksdata;
    console.log(data)
    const [open, setOpen] = useState(false);
    const [isEdite, setEdite] = useState(false);
    const [form, setform] = useState({
        TeacherId: "",
        date: "",
        reason: "",
        status: "Pending",
        duration: ""
    });
    const setdata = (data) => {
        setform(data);
    }
    const clearform = () => {
        setform({
            TeacherId: "",
            date: "",
            reason: "",
            status: "",
            duration: ""
        })
    }
    useEffect(() => {
        try {
            fetcherteacherleave();
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
            updatedata('teacherLeave', form.TeacherId, form);
            dispatch(updateTeacherLeave(form));
        } else {
            postdata('teacherLeave', form);
            dispatch(addTeacherLeave(form));
        }
        clearform();
    };

    const handledelte = async (item) => {
        const res = await deletedata("teacherLeave", item.TeacherId);
        dispatch(removeTeacherLeave(item));
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
                        Teacherleave Management
                    </h1>
                    <p className="text-sm text-gray-500">
                        Add, edit and manage all Teacherleaves
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700"
                >
                    + Add Teacherleave
                </button>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-5">
                <input
                    type="text"
                    placeholder="Search Teacherleave..."
                    className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="p-3 text-left">Teacher Id</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Reason</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Duration</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data && data.map((item, index) => {
                            return <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{item.TeacherId}</td>
                                <td className="p-3">{item.date}</td>
                                <td className="p-3">{item.reason}</td>

                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === "Approved" ? "bg-green-100 text-green-800" :
                                        item.status === "Rejected" ? "bg-red-100 text-red-800" :
                                            "bg-yellow-100 text-yellow-800"
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="p-3">{item.duration} day</td>
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
                            {isEdite ? "Edite" : "Add"} Teacherleave
                        </h2>

                        <div className="space-y-3">
                            <input
                                value={form.TeacherId}
                                name="TeacherId"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Teacher Id"
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

                            <input
                                value={form.reason}
                                name="reason"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Reason"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <select name="status" id="" value={form.status} onChange={handleonChange} className="w-full px-4 py-2 border rounded-lg">
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </select>

                            <input
                                value={form.duration}
                                name="duration"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Duration"
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

export default TeacherleavePage;