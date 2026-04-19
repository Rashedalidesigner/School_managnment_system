import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postdata } from "../../components/postdata";
import { updatedata } from "../../components/update";
import { addclass, getclass, removeclass, updateclass } from "../../Strore/slices/ClassSlices";
import axios from "axios";
import { deletedata } from "../../components/deletedata";

// Classroom Management Page for Admin
/*


*/
const ClassroomPage = () => {
    const fetchclass = async () => {
        const backendapi = import.meta.env.VITE_BACKENDAPI;
        const classtdata = await axios.get(backendapi + 'classes');
        dispatch(getclass(classtdata.data.data));
    };
    const dispatch = useDispatch();

    const assignmentsdata = useSelector((state) => {
        return state.classslices.data;
    })
    const data = assignmentsdata;
    console.log(data)
    const [open, setOpen] = useState(false);
    const [isEdite, setEdite] = useState(false);
    const [form, setform] = useState({

        className: "",
        section: "",
        roomNumber: "",
        classTeacher: "",
        studentCount: "",
        classSchedule: {},
        seation: "",
    });

    const setdata = (data) => {
        setform(data);
    }

    const clearform = () => {
        setform({

            className: "",
            section: "",
            roomNumber: "",
            classTeacher: "",
            studentCount: "",
            classSchedule: "",
            seation: "",
        })
    }

    useEffect(() => {
        try {
            fetchclass();
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
            updatedata('classes', form.ClassId, form);
            dispatch(updateclass(form));
        } else {
            postdata('classes', form);
            dispatch(addclass(form));
        }
        clearform();
    };

    const handledelte = async (item) => {
        const res = await deletedata("classes", item.ClassId);
        dispatch(removeclass(item));
        console.log(res);
    }

    console.log(data)

    if (data == []) {
        console.log(data);
        return <h1>Loading ...</h1>
    }
    // console.log(classdata)

    return (

        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        classroom Management
                    </h1>
                    <p className="text-sm text-gray-500">
                        Add, edit and manage all classrooms
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700"
                >
                    + Add classroom
                </button>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-5">
                <input
                    type="text"
                    placeholder="Search classroom..."
                    className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            {/* <th className="p-3 text-left">Class Id</th> */}
                            <th className="p-3 text-left">Class Name</th>
                            <th className="p-3 text-left">Section</th>
                            <th className="p-3 text-left">Room Number</th>
                            <th className="p-3 text-left">Class Teacher</th>
                            <th className="p-3 text-left">Student Count</th>
                            <th className="p-3 text-left">Class Schedule</th>
                            <th className="p-3 text-left">Seation</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data && data.map((item, index) => {
                            return <tr key={index} className="border-b hover:bg-gray-50">
                                {/* <td className="p-3 font-medium">{item.ClassId}</td> */}
                                <td className="p-3 ">{item.className}</td>
                                <td className="p-3">{item.section}</td>
                                <td className="p-3">{item.roomNumber}</td>
                                <td className="p-3">{item.classTeacher}</td>
                                <td className="p-3">{item.studentCount}</td>
                                <td className="p-3">{JSON.stringify(item.classSchedule)}</td>
                                <td className="p-3">{item.seation}</td>
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
                            {isEdite ? "Edite" : "Add"} classroom
                        </h2>

                        <div className="space-y-3">
                            {/* <input
                                value={form.ClassId}
                                name="ClassId"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Class Id"
                                className="w-full px-4 py-2 border rounded-lg"
                            /> */}

                            <input
                                value={form.className}
                                name="className"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Class Name"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <select name="section" id="" value={form.section} onChange={handleonChange} className="w-full px-4 py-2 border rounded-lg">
                                <option value="">Select Section</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>

                            <input
                                value={form.roomNumber}
                                name="roomNumber"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Room Number"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <input
                                value={form.classTeacher}
                                name="classTeacher"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Class Teacher"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <input
                                value={form.studentCount}
                                name="studentCount"
                                onChange={handleonChange}
                                type="text"
                                placeholder="Student Count"
                                className="w-full px-4 py-2 border rounded-lg"
                            />

                            <select name="classSchedule" id="classSchedule" className="w-full px-4 py-2 border rounded-lg" value={form.classSchedule} onChange={handleonChange}>
                                <option value="">Select Class Schedule</option>
                                <option value="08:00-12:00_Morning">Morning</option>
                                <option value="12:00-16:00_Afternoon">Afternoon</option>
                            </select>

                            <input
                                value={form.seation}
                                name="seation"
                                onChange={handleonChange}
                                type="date"
                                placeholder="Class Teacher"
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

export default ClassroomPage;