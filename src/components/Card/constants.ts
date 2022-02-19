import { TColors } from "src/components/Card/types";

const colors:Array<TColors> =
  [
    {
      color: "#FFD2A8",
      selected: false,
    },
    {
      color: "#E5E5E5",
      selected: false
    },
    {
      color: "#FFFFFF",
      selected: true,
    },
    {
      color: "#D02B2B",
      selected: false,
    },
    {
      color: "#C4C4C4",
      selected: false,
    },
    {
      color: "#EDBE47",
      selected: false
    }
  ];


const windows = [{
  label: "Л1",
  value: 1,
  type: "left"
},
{
  label: "П1",
  value: 1,
  type: "right"
},
{
  label: "Л2",
  value: 2,
  type: "left"
},
{
  label: "П2",
  value: 2,
  type: "right"
},
{
  label: "Л3",
  value: 3,
  type: "left"
},
{
  label: "П3",
  value: 3,
  type: "right"
},

];


export {
  colors,
  windows
};
