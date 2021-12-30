// import React from 'react';
import axios from 'axios';

const sendGetRequest = async () => {
    try {
        const resp = await axios.get('http://localhost:5000/tasks');
        return resp.data.payload
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export default sendGetRequest