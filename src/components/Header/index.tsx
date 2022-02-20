import React, { useState, VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { THeaderProps } from "src/components/Header/types";
import BackArrow from "src/components/Icons/BackArrow";
import BurgerMenu from "src/components/Icons/BurgerMenu";
import { useNavigate } from "react-router";
import Setup from "src/components/Setup";

const Header:VFC<THeaderProps> = ({ withDescription, withMobileButtons=true }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const navigate = useNavigate();
  const [isOpenSetup, setIsOpenSetup] = useState<boolean>(false);

  const onClickBack =()=> {
    navigate(-1);
  };

  return (
    <div id="header">
      {isMobile ? <div className="flex my-10 justify-evenly items-center">
        {withMobileButtons && <BackArrow onClick={onClickBack}/>}
        <h1 className="text-center header__title">Конфигуратор</h1>
        {withMobileButtons && <div onClick={()=>setIsOpenSetup(old=>!old)}>
          <BurgerMenu/>
        </div>}
      </div>: <h1 className="text-center mt-20 header__title">Конфигуратор</h1>}

      {isMobile && <Setup
        isOpen={isOpenSetup}
        setState={setIsOpenSetup}
      />}

      { withDescription && <p className="text-center my-5 header__desc">Собери свой модуль за 7 шагов!</p>}
      <hr/>
    </div>
  );
};

export default Header;
