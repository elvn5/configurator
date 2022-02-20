import React, { VFC } from "react";
import Title from "src/components/Title";
import Setup from "src/components/Setup";
import Card from "src/components/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectModules } from "src/redux/modules/selectors";
import { setCurtainsModule } from "src/redux/tentConfigurations";
import { ICard } from "src/redux/modules/types";
import { useNavigate } from "react-router";
import { ERoutes } from "src/constants/types";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

const CurtainsModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const selectCurtains = (args:ICard) =>{
    dispatch(setCurtainsModule(
      {
        price: Number(args.price),
        name: args.title || ""
      }
    ));

    navigate(ERoutes.WINDOWS);
  };
  return(
    <div className="module grid grid-cols-12">
      <div className={cn("module__main col-span-8 ", isMobile && "flex justify-center flex-col")}>
        <Title title="3. Выберите торцевые шторы"/>
        {data && data.curtains.map((curtain, index)=>
          <Card
            key={curtain.title + index}
            img={curtain.img}
            input={curtain.input}
            description={curtain.description}
            title={curtain.title}
            price={curtain.price}
            withPrice={true}
            color={false}
            onClickSelectModule={selectCurtains}
            withDetails={true}
            material={curtain.material}
            binding={curtain.binding}
          />
        )}
      </div>
      {isMobile ? null : <div className="col-span-4 my-8">
        <Setup/>
      </div>}
    </div>
  );
};


export default CurtainsModule;
