import axios from "axios";

export const postdata = async (dataName, data) => {
    const backendapi = import.meta.env.VITE_BACKENDAPI;
    const url = backendapi + dataName + '/' + 'add';
    const respon = await axios.post(url, data);
    return respon.data;
}