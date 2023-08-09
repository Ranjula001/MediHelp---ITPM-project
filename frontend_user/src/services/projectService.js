import axios from "axios";

const baseUrl = 'http://localhost:8070';

export const getAllProjects = () => {
    return axios.get(baseUrl + `/project/`);
};

export const deleteProjectByID = (id) => {
    return axios.delete(baseUrl + `/project/delete/${id}`)
};

export const getProjectById = (project_id) => {
    return axios.get(baseUrl + `/project/get/${project_id}`);
}

export const addProject = (project) => {
    return axios.post(baseUrl + `/project/add/`, project);
};

export const updateProject = (project_id, project) => {
    return axios.put(`/project/update/${project_id}`, project);
};
  
