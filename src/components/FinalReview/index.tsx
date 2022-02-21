import React, { VFC } from "react";
import Share from "src/components/Icons/Share";
import Print from "src/components/Icons/Print";
import { useSelector } from "react-redux";
import { selectCurrentConfiguration } from "src/redux/tentConfigurations/selectors";

const FinalReview:VFC = () => {
  const { currentConfiguration } = useSelector(selectCurrentConfiguration);

  return (
    <div className="review">
      {/* eslint-disable-next-line max-len */}
      <img src={currentConfiguration.base?.img || ""} alt="" />
      <div className="review__actions">
        <span className="text-base">Поделиться</span>
        <span><Share/></span>
        <span className="text-base">Распечатать</span>
        <span><Print/></span>
      </div>
    </div>
  );
};

export default FinalReview;
