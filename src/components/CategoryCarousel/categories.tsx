import { ReactComponent as Icon1 } from "~/assets/icons/81.svg";
import { ReactComponent as Icon2 } from "~/assets/icons/82.svg";
import { ReactComponent as Icon3 } from "~/assets/icons/83.svg";
import { ReactComponent as Icon4 } from "~/assets/icons/84.svg";

export type Category = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "1",
    icon: <Icon1 />,
    label: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "2",
    icon: <Icon2 />,
    label: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "3",
    icon: <Icon3 />,
    label: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "4",
    icon: <Icon4 />,
    label: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "5",
    icon: <Icon3 />,
    label:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipddasdasdasdasdasdasd1",
  },
  {
    id: "6",
    icon: <Icon2 />,
    label:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.dsadsadddddddddddddd1",
  },
];
