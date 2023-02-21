import { atom } from "recoil";

export const mobileNavAtom = atom<boolean>({
  key: "mobileNavState",
  default: false
});