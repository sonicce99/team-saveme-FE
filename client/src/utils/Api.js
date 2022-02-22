import { axiosInstance } from "../utils/TokenApi.jsx";
import { UseTransfer } from "../hooks/UseTransfer.js";

export const searchResultApi = async (value, selected) => {
  try {
    const LocationString = UseTransfer(selected.join());
    const data = await axiosInstance.get("/api/users/me");
    return data;
  } catch (error) {
    return Error;
  }
};
