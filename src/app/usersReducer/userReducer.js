import { createSlice } from '@reduxjs/toolkit'
import { modifyElement, removeElement, addUser } from '../../Utils/functionsState'
import { createUser, updateUser, getUser, getAllUsers, removeUser } from './userActions'

const initialState = {
   status: null,
   users: [],
   user: {}
}

const userSlice = createSlice({
    name: "usersReducer",
    initialState,
    extraReducers: {
        [getAllUsers.pending]: (state) =>{
            state.status = 'loading'
        },
        [getAllUsers.fulfilled]: (state, { payload }) =>{
            state.status = 'success',
            state.users= payload
        },
        [getAllUsers.rejected]: (state) =>{
            state.status = 'failed'
        },
        [getUser.pending]: (state) =>{
            state.status = 'loading'
        },
        [getUser.fulfilled]: (state, { payload }) =>{
            state.status = 'success',
            state.user= payload
        },
        [getUser.rejected]: (state) =>{
            state.status = 'failed'
        },
        [createUser.pending]: (state) =>{
            state.status = 'loading'
        },
        [createUser.fulfilled]: (state, { payload }) =>{
            state.status = 'success',
            state.users= addUser([...state.users], payload)
        },
        [createUser.rejected]: (state) =>{
            state.status = 'failed'
        },
        [updateUser.pending]: (state) =>{
            state.status = 'loading'
        },
        [updateUser.fulfilled]: (state, { payload }) =>{
            state.status = 'success',
            state.users= modifyElement([...state.users], payload)
        },
        [updateUser.rejected]: (state) =>{
            state.status = 'failed'
        },
        [removeUser.pending]: (state) =>{
            state.status = 'loading'
        },
        [removeUser.fulfilled]: (state, { payload }) =>{
            state.status = 'success',
            state.users= removeElement([...state.users], payload)
        },
        [removeUser.rejected]: (state) =>{
            state.status = 'failed'
        },
    },
})

export default userSlice.reducer
