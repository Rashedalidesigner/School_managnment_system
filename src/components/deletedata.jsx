import axios from "axios";

export const deletedata = async (dataName, id) => {
    const backendapi = import.meta.env.VITE_BACKENDAPI;
    const respon = await axios.get(backendapi + dataName + '/' + 'delete' + id);
    return respon;
}