import axios from 'axios';

const updatedata = async (dataname, type, data) => {
    const backendapi = import.meta.env.VITE_BACKENDAPI;
    const url = backendapi + dataname + '/' + type;
    const respon = await axios.post(url, data);
    return respon.data;
}

export default updatedata