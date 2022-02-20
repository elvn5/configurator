import React, { FC } from "react";
import { TMainLayoutProps } from "src/components/MainLayout/types";

const MainLayout:FC<TMainLayoutProps> = (
  {
    children,
    footer,
    header
  }) =>
  (
    <div className="container mx-auto px-4">
      {header}
      {children}
      {footer}
    </div>
  );

export default MainLayout;
