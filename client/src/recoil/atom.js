import { atom } from "recoil";
import { categoryList } from "../utils/categoryList";

export const compareBtnClickList = atom({
  key: "compareBtn",
  default: categoryList,
});
