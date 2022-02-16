import { useEffect } from "react";


const useScrollIntoView = ():void =>{
  useEffect(()=>{
    const $header = document.querySelector("#header");
    if($header) {
      $header.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
};

export {
  useScrollIntoView
};
