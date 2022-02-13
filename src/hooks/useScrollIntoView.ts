import { useEffect } from "react";


const useScrollIntoView = ():void =>{
  useEffect(()=>{
    document.body.scrollIntoView(true);
  }, []);
};

export {
  useScrollIntoView
};
