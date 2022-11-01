import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentCommentId: null,
};

const handleDeleteComment = createAsyncThunk(
  "delete-comment",
  (arg, { getState }) => {
    const state = getState();
    // fetch instead of console.log
    try {
      const res = fetch("/", {
        method: "DELETE",
        body: JSON.stringify({
          commentId: state.currentCommentId,
        }),
      });
      if (!res.ok) throw new Error("Something went wrong");
    } catch (err) {
      return console.log.error(err);
    }
  }
);

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModalOpen: (state, action) => {
      state.currentCommentId = action.payload;
      state.isOpen = true;
    },
    handleModalClosed: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (build) => {
    build.addCase(handleDeleteComment.pending, (state, action) => {});
    build.addCase(handleDeleteComment.fulfilled, (state, action) => {});
    build.addCase(handleDeleteComment.rejected, (state, action) => {});
  },
});

export const { handleModalOpen, handleModalClosed } = modalSlice.actions;

export default modalSlice.reducer;
