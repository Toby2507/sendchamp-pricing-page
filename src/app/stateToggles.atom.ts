import { atom } from "recoil";

export const mobileNavAtom = atom<boolean>({
  key: "mobileNavState",
  default: false
});

export const productDetailsAtom = atom<{ show: boolean, id: null | number; }>({
  key: "productDetailState",
  default: { show: false, id: null }
});