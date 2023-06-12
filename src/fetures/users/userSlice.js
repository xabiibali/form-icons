import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id: '0' , name: 'Abdiasiis halane'},
    {id: '1' , name: 'Xabiib Ali '},
    {id: '2' , name: 'Hasan Abdi'},

]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer
