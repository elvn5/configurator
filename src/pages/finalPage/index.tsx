import React, { VFC } from "react";
import FinalConfig from "src/components/FinalConfig";
import FinalReview from "src/components/FinalReview";

const FinalPage:VFC = () => (
  <div className="final container mx-auto px-4 mt-20">
    <FinalConfig/>
    <FinalReview/>
  </div>
);

export default FinalPage;
