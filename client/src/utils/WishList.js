import { DEL, LIVE } from "../recoil/atom";

export const changeWishStatus = (oldWish, id) => {
  const targetIndex = oldWish.findIndex((old) => old.recruitmentId === id);
  const targetArr = oldWish.filter((old) => old.recruitmentId === id);

  const newArr = {
    applyCnt: targetArr[0].applyCnt,
    companyHref: targetArr[0].companyHref,
    companyName: targetArr[0].companyName,
    experienceLevel: targetArr[0].experienceLevel,
    expirationDate: targetArr[0].expirationDate,
    industryName: targetArr[0].industryName,
    jobType: targetArr[0].jobType,
    locationName: targetArr[0].locationName,
    positionTitle: targetArr[0].positionTitle,
    recruitmentId: targetArr[0].recruitmentId,
    requiredEducationLevel: targetArr[0].requiredEducationLevel,
    salaryName: targetArr[0].salaryName,
    url: targetArr[0].url,
    wished: targetArr[0].wished,
  };

  if (targetArr[0].status === LIVE) {
    newArr.status = DEL;
  } else {
    newArr.status = LIVE;
  }

  const newWish = [...oldWish];
  newWish.splice(targetIndex, 1, newArr);
  return newWish;
};
