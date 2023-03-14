import "./index.css";
import { Provider } from "react-redux";
import Routers from "./Routers";
import { configureStore } from "@reduxjs/toolkit";
// import các kệ hàng ( reducer )
import productReducer from "./store/ProductSlide";
import ProductThunkSlide from "./store/ProductThunkSlide";


// đây là nhà kho
export const store = configureStore({
  reducer: {
    product: productReducer,
    productThunk: ProductThunkSlide,
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}