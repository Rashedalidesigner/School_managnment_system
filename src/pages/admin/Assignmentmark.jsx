import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postdata } from "../../components/postdata";
import { updatedata } from "../../components/update";
import { addmark, getmark, removemark, updatemark } from "../../Strore/slices/MarkSlices";
import axios from "axios";
import { deletedata } from "../../components/deletedata";
import Id from "../../components/Id";

const AssignmentmarkPage = () => {
    const fetchAssignmentsmark = async () => {
        const backendapi = import.meta.env.VITE_BACKENDAPI;
        const asiignmentdata = await axios.get(backendapi + 'assignmentmark');
        dispatch(getmark(asiignmentdata.data.data));
    };
    const dispatch = useDispatch();

    const assignmentmarksdata = useSelector((state) => {
        return state.mark.data;
    })
    const data = assignmentmarksdata;
    const [open, setOpen] = useState(false);
    const [isEdite, setEdite] = useState(false);
    const [form, setform] = useState({
        AssignmentId: "",
        StudentId: "",
        marks: "",
    });
    const setdata = (data) => {
        setform(data);
    }
    const clearform = () => {
        setform({
            AssignmentId: "",
            StudentId: "",
            marks: "",
        })
    }
    useEffect(() => {
        try {
            fetchAssignmentsmark();
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
            updatedata('assignmentmark', form.AssignmentId, form);
            dispatch(updatemark(form));
        } else {
            postdata('assignmentmark', form);
            dispatch(addmark(form));
        }
        clearform();
    };

    const handledelte = async (item) => {
        console.log(item.StudentId);
        const res = await deletedata("assignmentmark", item.StudentId);
        dispatch(removemark(item));
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
                        Assignmentmark Management
                    </h1>
                    <p className="text-sm text-gray-500">
                        Add, edit and manage all Assignmentmarks
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700"
                >
                    + Add Assignmentmark
                </button>
            </div>

            {/* Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-5">
                <input
                    type="text"
                    placeholder="Search Assignmentmark..."
                    className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="p-3 text-left">Assignmentmark Id</th>
                            <th className="p-3 text-left">Student Id</th>
                            <th className="p-3 text-left">Mark</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => {
                            return <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{item.AssignmentId}</td>
                                <td className="p-3 ">{item.StudentId}</td>
                                <td className="p-3">{item.marks}</td>
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
            </div >

            {/* Modal */}
            {
                open && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

                        <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">

                            <h2 className="text-lg font-semibold mb-4">
                                {isEdite ? "Edite" : "Add"} Assignmentmark
                            </h2>

                            <div className="space-y-3">
                                <input
                                    value={form.AssignmentId}
                                    name="AssignmentId"
                                    onChange={handleonChange}
                                    type="text"
                                    placeholder="Assignmentmark Id"
                                    className="w-full px-4 py-2 border rounded-lg"
                                />

                                <input
                                    value={form.StudentId}
                                    name="StudentId"
                                    onChange={handleonChange}
                                    type="text"
                                    placeholder="Student Id"
                                    className="w-full px-4 py-2 border rounded-lg"
                                />

                                <input
                                    value={form.marks}
                                    name="marks"
                                    onChange={handleonChange}
                                    type="text"
                                    placeholder="Mark"
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
                )
            }

        </div >

    );
};

export default AssignmentmarkPage;