import { configureStore, createSlice } from "@reduxjs/toolkit"

let currentID = 1;

const initValues = []

const dataSlice = createSlice({
  name: "Data",
  initialState: initValues,
  reducers: {
    storeData(state, action) {
      const { input1, input2, input3 } = action.payload;
      state.push({
        id: currentID,
        input1,
        input2,
        input3
      });
      currentID++;
      console.log(JSON.parse(JSON.stringify(state)));
    }
  }
});

const store = configureStore({
  reducer: dataSlice.reducer
})

export const { storeData } = dataSlice.actions;
export default store;
