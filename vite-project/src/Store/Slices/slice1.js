import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "e1dc48e7femsh873409c303b78f8p1e570fjsn98d96c9b786f",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};
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
    // for trending coins
    builder.addCase(fetchTrendingCoins.fulfilled, (state, action) => {
      state.trendingCoins = action.payload;
    });
    // for trending coins
  },
});

// Fetching Coins
export const fetchCoins = createAsyncThunk("fetchCoins", async () => {
  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data.data.coins;
  } catch (error) {
    console.log(error);
  }
});
// Fetching coins

// fetching trending coins
export const fetchTrendingCoins = createAsyncThunk(
  "fetchTrendingCoins",
  async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.data;
      return data.coins;
    } catch (error) {
      console.log(error);
    }
  }
);
// fetching trending coins
export default Slice1.reducer;
