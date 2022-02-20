import React, { VFC } from "react";
import MainLayout from "src/components/MainLayout";
import CurtainsModule from "src/components/CurtainsModule";
import Footer from "src/components/Footer";
import { useScrollIntoView } from "src/hooks/useScrollIntoView";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCurtainsModule } from "src/redux/tentConfigurations";
import { ERoutes } from "src/constants/types";
import Header from "src/components/Header";
import { useMediaQuery } from "react-responsive";

const CurtainsPage:VFC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useScrollIntoView();

  const footerButtons = [
    {
      title : "Назад",
      className: "footer__back",
      onClick: () => {
        navigate(-1);
      },
    },
    {
      title: "Без торцевых штор",
      className: "footer__without-module",
      onClick: () => {
        dispatch(setCurtainsModule(null));
        navigate(ERoutes.WINDOWS);
      }
    }
  ];

  return (
    <MainLayout
      header={<Header withDescription={false}/>}
      footer={<Footer buttons={isMobile ? [footerButtons[1]] : footerButtons}/>}>
      <CurtainsModule/>
    </MainLayout>
  );
};

export default CurtainsPage;
