import axios from "axios";

export async function registerUser(data) {const response = await axios.post("/register_user", {userName: data.username, email: data.email,
    password: data.password}); return response.data;}

export async function loginUser(data) {const response = await axios.post("login_user", {name: data.username, password: data.password}); return response.data;}

export async function makeUsersRequest() {const response = await axios.get("/users"); return response.data;}

export async function deleteUserRequest(data) {const response = await axios.post("/delete_user", {_id: data}); return response.data;}

export async function blockUserRequest(data) {const response = await axios.post("/block_user", {_id: data}); return response.data;}

export async function unBlockUserRequest(data) {const response = await axios.post("/unblock_user", {_id: data}); return response.data;}
