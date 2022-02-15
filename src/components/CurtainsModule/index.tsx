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

const CurtainsModule:VFC = () => {
  const { data } = useSelector(selectModules);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <Title title="3. Выберите торцевые шторы"/>
        {data && data.curtains.map((curtain, index)=>
          <Card
            key={curtain.title + index}
            img={curtain.img}
            description={curtain.description}
            title={curtain.title}
            price={curtain.price}
            withPrice={true}
            color={false}
            onClickSelectModule={selectCurtains}
            withDetails={true}/>)}
      </div>
      <div className="col-span-4 my-8">
        <Setup progress="40"/>
      </div>
    </div>
  );
};


export default CurtainsModule;
