import { createSlice } from "@reduxjs/toolkit";

const storedToken = JSON.parse(localStorage.getItem("token"))
const storedSeller = JSON.parse(localStorage.getItem("seller")) 

const initialState = {
  seller: storedSeller || null,
  token: storedToken || null,
};

const regiSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    loggedInSeller(state, action) {
        localStorage.setItem("seller",JSON.stringify(action?.payload?.user))
        localStorage.setItem("token",JSON.stringify(action?.payload?.token))
      state.seller = localStorage.getItem("seller")
      state.token = localStorage.getItem("token")
    },

    loggedOutSeller(state){
localStorage.removeItem("seller")
localStorage.removeItem("token")
state.seller = null
state.token = null

    }
  },

});

export const { loggedInSeller ,loggedOutSeller} = regiSlice.actions;
export default regiSlice.reducer;
