import { axiosInstance } from "../utils/TokenApi.jsx";
import { LocationNumber } from "../hooks/UseTransfer.js";

export const searchResultApi = async (value, selected) => {
  const LocationString = LocationNumber(selected).join();
  const data = await axiosInstance.get(
    `/api/jobs/list?start=${0}&keywords=${value}&loc_cd=${LocationString}&count=10`
  );
  return data.data.data;
};
