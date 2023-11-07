import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const STATUS = Object.freeze({
  LOADING: "loading",
  ERROR: "error",
  IDLE: "idle",
});
const initialState = {
  trendingCoins: [],
  coins: [],
  status: STATUS.LOADING,
};
const Slice1 = createSlice({
  name: "Slice1",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.status = STATUS.IDLE;
      state.coins = action.payload;
    });
    builder.addCase(fetchCoins.rejected, (state) => {
      state.status = STATUS.ERROR;
    });
  },
});

const fetchCoins = createAsyncThunk("fetchCoins", async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/list"
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});
export default Slice1.reducer;
