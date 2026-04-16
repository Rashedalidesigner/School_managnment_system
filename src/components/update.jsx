import axios from "axios";

export const updatedata = async (dataName, id, data) => {
    const backendapi = import.meta.env.VITE_BACKENDAPI;
    const url = backendapi + dataName + '/' + 'update' + '/' + id;
    const respon = await axios.put(url, data);
    return respon;
}