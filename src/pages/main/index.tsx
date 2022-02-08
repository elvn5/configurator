import React, { FC } from "react";
import MainLayout from "src/components/MainLayout";
import Card from "src/components/Card";

const Main:FC = ( ) => (
  <MainLayout>
    <h2 className="text-2xl my-8">1. Выберите каркас и тент.</h2>
    <div className="flex flex-wrap">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </MainLayout>
);

export default Main;
