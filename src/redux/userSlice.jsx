import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "Cultural Enthusiast",
  name: "",
  bookmarks: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    addBookmark(state, action) {
      if (!state.bookmarks.includes(action.payload)) {
        state.bookmarks.push(action.payload);
      }
    },
    removeBookmark(state, action) {
      state.bookmarks = state.bookmarks.filter(b => b !== action.payload);
    },
  },
});

export const { setRole, setName, addBookmark, removeBookmark } = userSlice.actions;
export default userSlice.reducer;