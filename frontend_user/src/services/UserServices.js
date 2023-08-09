import axios from "axios";
// import handleError from "./HandleServerError";
import Swal from "sweetalert2";

const baseUrl = 'http://localhost:8070';

export const loginUser = (user) => {
    return axios.post(baseUrl + `/user/SignIn/`, user);
};

export const signUp = (user) => {
    return axios.post(baseUrl + `/user/SignUp/`, user);
};

// export const UserSignUpService = async (user) => {
//     try {
//         const res = await axios.post(baseUrl + `/user/SignUp`, user);
//         Swal.fire("success", "Done!", "Profile Created Successfully!");
//         return {
//             status: true,
//         };
//     } catch (err) {
//         handleError(err);
//         return {
//             status: false,
//         };
//     }
// };
//
// export const UserSignInService = async (user) => {
//     try {
//
//         return axios.post(baseUrl + `/user/SignIn`, user);
//
//         // const res = await axios.post(baseUrl + `/user/SignIn`, user);
//         // // Swal.fire("success", "Done!", "Successfully Signed In!");
//         // localStorage.setItem("user", JSON.stringify(res.data));
//         // return {
//         //     status: true,
//         // };
//     } catch (err) {
//         handleError(err);
//         return {
//             status: false,
//         };
//     }
// };
//
// export const deleteUserAccountService = async (id) => {
//     try {
//         await axios.delete(baseUrl + `/user/DeleteUser/${id}`);
//         Swal.fire("success", "Done!", "Account Deleted Succesfully!");
//         localStorage.removeItem("user");
//         return {
//             status: true,
//         };
//     } catch (err) {
//         handleError(err);
//         return {
//             status: false,
//         };
//     }
// };
//
// export const getAllUserAccountsService = async () => {
//     try {
//         const res = await axios.get(baseUrl + `/user/`);
//         return {
//             status: true,
//             users: res.data
//         };
//     } catch (err) {
//         handleError(err);
//         return {
//             status: false,
//         };
//     }
// };
//
//
// export const updateUserAccountService = async (id, user) => {
//     try {
//         const res = await axios.put(baseUrl + `/user/UpdateUser/${id}`, user);
//         Swal.fire("success", "Done!", "Account Updated Succesfully!");
//         localStorage.setItem("user", JSON.stringify(res.data));
//         return {
//             status: true,
//         };
//     } catch (err) {
//         handleError(err);
//         return {
//             status: false,
//         };
//     }
// };


