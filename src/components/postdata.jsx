import axios from "axios";

export const postdata = async (dataname, type, data) => {
    const backendapi = import.meta.env.VITE_BACKENDAPI;
    const url = backendapi + dataname + '/' + type;
    console.log('form post data', respon)
    return respon.data;
}