import axios from "axios";

const baseUrl = 'http://localhost:8070';

export const getAllPrescriptions = () => {
    return axios.get(baseUrl + `/prescription/`);
};

export const deletePrescriptionByID = (id) => {
    return axios.delete(baseUrl + `/prescription/delete/${id}`)
};

export const getPrescriptionById = (prescription_id) => {
    return axios.get(baseUrl + `/prescription/get/${prescription_id}`);
}

export const addPrescription = (prescription) => {
    return axios.post(baseUrl + `/prescription/add/`, prescription);
};

export const updatePrescription = (prescription_id, prescription) => {
    return axios.put(`/prescription/update/${prescription_id}`, prescription);
};
  
