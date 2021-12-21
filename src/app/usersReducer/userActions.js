import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const URL = process.env.REACT_APP_ALKEMY_API_URL

const createUser = createAsyncThunk(
    "users/createUser",
    async (user) => {
        const response = await axios.post(`${URL}`, user)
        return response.data
    }
)

const removeUser = createAsyncThunk(
    "users/removeUser",
    async (id) => {
        const response = await axios.delete(`${URL}/${id}`)
        return id
    }
)

const getUser = createAsyncThunk(
    "users/getUser",
    async (id) => {
        const response = await axios.get(`${URL}/${id}`)
        return response.data
    }
)

const getAllUsers = createAsyncThunk(
    "users/getAllUsers",
    async () => {
        const response = await axios.get(`${URL}`)
        return response.data
    }
)

const updateUser = createAsyncThunk(
    "users/updateUser",
    async (id, user) => {
        const response = await axios.put(`${URL}/${id}`, user)
        return response.data
    }
)

export { getAllUsers, getUser, createUser, removeUser, updateUser }