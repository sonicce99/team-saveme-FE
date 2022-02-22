import { atom, selector } from "recoil";
import { categoryList } from "../utils/categoryList";

export const ALL = "ALL";
export const LIVE = "LIVE";
export const DEL = "DEL";

export const compareBtnClickList = atom({
  key: "compareBtn",
  default: categoryList,
});

export const wishListAtom = atom({
  key: "wishList",
  default: [],
});

export const wishListStatus = atom({
  key: "wishStatus",
  default: ALL,
});

export const wishListAtomSelector = selector({
  key: "wishListSelector",
  get: ({ get }) => {
    const wishList = get(wishListAtom);
    const status = get(wishListStatus);
    if (status === ALL) return wishList;
    if (status === LIVE) return wishList.filter((list) => list.status === LIVE);
    if (status === DEL) return wishList.filter((list) => list.status === DEL);
  },
});
