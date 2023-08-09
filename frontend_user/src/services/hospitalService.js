import axios from "axios";

const baseUrl = 'http://localhost:8070';

export const getAllHospitals = () => {
    return axios.get(baseUrl + `/hospital/`);
};

export const deleteHospitalByID = (id) => {
    return axios.delete(baseUrl + `/hospital/delete/${id}`)
};

export const getHospitalById = (hospital_id) => {
    return axios.get(baseUrl + `/hospital/get/${hospital_id}`);
}

export const addHospital = (hospital) => {
    return axios.post(baseUrl + `/hospital/add/`, hospital);
};

export const addDonation = (donation) => {
    return axios.post(baseUrl + `/donation/add/`, donation);
};

export const updateHospital = (hospital_id, hospital) => {
    return axios.put(`/hospital/update/${hospital_id}`, hospital);
};
  
