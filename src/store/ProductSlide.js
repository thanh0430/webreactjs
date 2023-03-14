
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("action", action.payload);
      const findIndexItem = state.productList.findIndex(product => product.id === action.payload?.id);
      if (findIndexItem !== -1) { // tìm thấy ( vì hàm findIndex trả về -1 là tìm thấy, đọc docs ở đây: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
        state.productList[findIndexItem].quantity += 1; // tăng thêm 1 giá trị ở quantity
      } else { // nếu không thì thêm mới phần tử
        state.productList = [...state.productList, action.payload];
      }
    },
    
    removeProduct: (state, action) => {
      console.log("action", action.payload);
      state.productList = state.productList.filter(el => el.id !== action.payload.id)
    },
        decreaseQuantity: (state, action) => {

      const findIndexItem = state.productList.findIndex(product => product.id === action.payload?.id);
      if (action.payload.quantity !== 1) {
        state.productList[findIndexItem].quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      
      const findIndexItem = state.productList.findIndex(product => product.id === action.payload?.id);
      console.log("tangw")
      state.productList[findIndexItem].quantity += 1;
    },
  
  }
});

export const { addProduct, removeProduct,decreaseQuantity,  increaseQuantity } =productSlice.actions;

export default productSlice.reducer;
