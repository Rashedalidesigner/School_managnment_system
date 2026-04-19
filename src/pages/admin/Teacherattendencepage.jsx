import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postdata } from "../../components/postdata";
import { updatedata } from "../../components/update";
import axios from "axios";
import { addTeacherattendence, getTeacherattendence, removeTeacherattendence, updateTeacherattendence } from "../../Strore/slices/TeacherattendenceSlices";
import { deletedata } from "../../components/deletedata";

const TeacherattendencePage = () => {
    const fetchteacherattendence = async () => {
        const backendapi = import.meta.env.VITE_BACKENDAPI;
        const asiignmentdata = await axios.get(backendapi + 'teacherattendence');
        dispatch(getTeacherattendence(asiignmentdata.data.data));
    };
    const dispatch = useDispatch();

    const assignmentmarksdata = useSelector((state) => {
        return state.teacherattendence.data;
    })
    const data = assignmentmarksdata;
    console.log(data)
    const [open, setOpen] = useState(false);
    const [isEdite, setEdite] = useState(false);
    const [form, setform] = useState({
        TeacherId: "",
        date: "",
        status: "",
        checkIn: "08:00",
        checkOut: "08:00"
    });
    const setdata = (data) => {
        setform(data);
    }
    const clearform = () => {
        setform({
            TeacherId: "",
            date: "",
            status: "",
            checkIn: "",
            checkOut: ""
        })
    }
    useEffect(() => {
        try {
            fetchteacherattendence();
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
            updatedata('teacherattendence', form.TeacherId, form);
            dispatch(updateTeacherattendence(form));
        } else {
            postdata('teacherattendence', form);
            dispatch(addTeacherattendence(form));
        }
        clearform();
    };

    const handledelte = async (item) => {
        const res = await deletedata("teacherattendence", item.TeacherId);
        dispatch(removeTeacherattendence(item));
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
                            <th className="p-3 text-left">Teacher Id</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Check In</th>
                            <th className="p-3 text-left">Check Out</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data && data.map((item, index) => {
                            return <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{item.TeacherId}</td>
                                <td className="p-3">{item.date}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="p-3">{item.checkIn}</td>
                                <td className="p-3">{item.checkOut}</td>
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
                            {isEdite ? "Edite" : "Add"} Teacherattendence
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
                            <select name="status" id="status" value={form.status} onChange={handleonChange} className="w-full px-4 py-2 border rounded-lg">
                                <option value="Late">Late</option>
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                            </select>

                            <select name="checkIn" id="checkIn" value={form.checkIn} onChange={handleonChange} className="w-full px-4 py-2 border rounded-lg">
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>

                            </select>

                            <select name="checkOut" id="checkOut" value={form.checkOut} onChange={handleonChange} className="w-full px-4 py-2 border rounded-lg">
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
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

export default TeacherattendencePage;