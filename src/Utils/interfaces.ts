import { IconType } from "react-icons";

export interface footerColInterface {
  title: string;
  items: string[];
}


export interface SingleProductInterface {
  id: number,
  icon: IconType,
  title: string,
  sendDesc: string,
  recieveDesc?: string,
  priceUnit: string,
  sendPrice: number,
  recievePrice?: number;
  extraDetail?: boolean;
}

interface SubmenuItemInterface {
  title: string,
  icon?: IconType,
  desc?: string,
  notAvailable?: boolean;
}

export interface SubmenuInterface {
  title: string,
  items: SubmenuItemInterface[];
}

export interface NavItemInterface {
  title: string,
  submenus?: SubmenuInterface[];
}