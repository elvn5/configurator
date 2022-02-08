import React, { FC } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

const MainLayout:FC = ({ children }) => (
  <div className="container mx-auto px-4">
    <Header/>
    {children}
    <Footer/>
  </div>
);

export default MainLayout;
