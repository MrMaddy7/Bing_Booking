import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modalShow: false,
        isModalCreationState: false,
        key: "",
        title: "",
        description: "",
        tag: "",
    },
    reducers: {
        handleModalToggle: (state) => {
            state.modalShow = !state.modalShow;
        },
        handleModalCreation: (state) => {
            state.isModalCreationState = !state.isModalCreationState;
        },
        addData: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.tag = action.payload.tag;
            state.key = action.payload.id;
        },
        handleEmptyModalState: (state) => {
            state.title = "";
            state.description = "";
            state.tag = "";
            state.key = "";
        }


    }
});

export default modalSlice.reducer;
export const { handleModalToggle, addData, handleEmptyModalState, handleModalCreation } = modalSlice.actions;
