import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        sidebarShow: true,
        selectedTag: "All",
    },
    reducers: {
        handleSideBarToggle: (state) => {
            // state.numOfCakes--;
            state.sidebarShow = !state.sidebarShow;
        },
        handleSelectedTag: (state, action) => {
            state.selectedTag = action.payload;
        },
        resetSelectedTag: (state) => {

            state.selectedTag = "All";
        }
    }

});

export default sidebarSlice.reducer;
export const { handleSideBarToggle, handleSelectedTag, resetSelectedTag } = sidebarSlice.actions;
