import React from 'react';
import axios from 'axios';

const Calldata = async (data, type) => {
    const backendapi = import.meta.env.VITE_BACKENDAPI;
    const respon = await axios.get(backendapi + data + '/' + type);
    return respon.data;
}

export default Calldata