import { createSlice } from "@reduxjs/toolkit";



const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        searchText: ""
    },
    reducers: {
        handleSearchText: (state, action) => {
            state.searchText = action.payload;
        },

    },
    // extraReducers: (builder) => {
    //     builder.addCase(cakeOrdered, state => {
    //         state.numOfIceCreams--;
    //     });
    // }
});

export default navbarSlice.reducer;
export const { handleSearchText } = navbarSlice.actions;
