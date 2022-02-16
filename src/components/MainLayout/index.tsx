import React, { FC } from "react";
import Header from "src/components/Header";
import { TMainLayoutProps } from "src/components/MainLayout/types";

const MainLayout:FC<TMainLayoutProps> = (
  {
    children,
    footer
  }) =>
  (
    <div className="container mx-auto px-4">
      <Header/>
      {children}
      {footer}
    </div>
  );

export default MainLayout;
