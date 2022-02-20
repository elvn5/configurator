import React, { VFC } from "react";
import Share from "src/components/Icons/Share";
import Print from "src/components/Icons/Print";

const FinalReview:VFC = () => (
  <div className="review">
    {/* eslint-disable-next-line max-len */}
    <img src="https://lh3.googleusercontent.com/pw/AM-JKLWtyegtvmirc27K1Svhdu5hgY2vnD8zowI6WqiCB_evUd7rGkyJzM8yaPhreIM-PBkalnXmx9MDUMzb7GBtKKDHX2nAEYlCd68auZKf4Urs6oToTRtalLrMHrNxCFNqnVQs2m431PVx4IAvIOwog3mgHg=w600-h540-no?authuser=0" alt="" />
    <div className="review__actions">
      <span className="text-base">Поделиться</span>
      <span><Share/></span>
      <span className="text-base">Распечатать</span>
      <span><Print/></span>
    </div>
  </div>
);

export default FinalReview;
