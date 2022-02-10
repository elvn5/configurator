
function getColor(color:string):string {
  switch (color){
  case "#FFFFFF":
    return "Белый";
  case "#C4C4C4":
    return "Серый";
  case "#D02B2B":
    return "Красный";
  case "#E5E5E5":
    return "Серый";
  case "#EDBE47":
    return "Желтый";
  default:
    return "";
  }
}

export {
  getColor
};
