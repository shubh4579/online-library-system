import { createSlice } from "@reduxjs/toolkit";
import { Books } from "./mockData";
const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: Books,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
