"use client";

import { Provider } from "react-redux";
import { store } from "../lib/store/store";
import NavBar from "./navBar";
import Footer from "./footer";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <NavBar />
      {children}
      <Footer />
    </Provider>
  );
};

export default Providers;
