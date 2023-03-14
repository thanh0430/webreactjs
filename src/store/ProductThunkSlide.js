import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
  productList: [], // [{id: 1, name: abc, quantity: 1}],
  loading: false
};

export const getCategoryFilter = createAsyncThunk('category/getCategoryFilter', async (params, thunkAPI) => {
  const result = await axios.get('http://localhost:9010/category');  
  return result.data.result.response;      
});

export const ProductThunkSlide = createSlice({
  name: "productThunkSlide",
  initialState,
  reducers: {
    addProduct: (state, action) => {
    },

  },
  // Chỗ này là nơi nhận data từ việc call api ở trên createAsyncThunk ( ví dụ dòng 14 )
  extraReducers: {
    [getCategoryFilter.pending]: (state, action) => { // trước khi gọi api
      state.loading = true;
    },
    [getCategoryFilter.fulfilled]: (state, action) => { // gọi api trả về thành công
      state.loading = false;
      state.productList = [...state.productList, ...action.payload];
      console.log(action.payload)
    },
    [getCategoryFilter.rejected]: (state, action) => { // gọi api thất bài
      state.loading = false;
    },
  }
});

export const { addProduct } = ProductThunkSlide.actions;

export default ProductThunkSlide.reducer;