import React from "react";

enum EColors {
  "#FFD2A8" = "Бежевый",
  "#E5E5E5" = "Серый",
  "#FFFFFF" = "Белый",
  "#D02B2B" = "Красный",
  "#C4C4C4" = "Серый",
  "#EDBE47" = "Желтый",
}

type TSetupProps = {
  isOpen?: boolean,
  setState?: React.Dispatch<React.SetStateAction<boolean>>,
}

export {
  EColors,
};
export type { TSetupProps };


