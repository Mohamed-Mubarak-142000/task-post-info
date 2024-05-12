import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    fname: "",
    lname: "",
    phone: "",
    countryName: "",
    iso2: "",
    flag: "",
  },
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      const { fname, lname, phone, countryName, iso2, flag } = action.payload;
      state.user.fname = fname;
      state.user.lname = lname;
      state.user.phone = phone;
      state.user.countryName = countryName;
      state.user.iso2 = iso2;
      state.user.flag = flag;
    },

    getUserData: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    getUserFailure: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { addUserData, getUserData, getUserFailure } = userSlice.actions;
export default userSlice.reducer;
