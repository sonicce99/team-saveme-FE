import { axiosInstance } from "../utils/TokenApi.jsx";
import { useLocationNumber } from "../hooks/useLocationNumber.js";

export const searchResultApi = async (value, selected) => {
  try {
    // const LocationArray = useLocationNumber(selected);
    const data = await axiosInstance.get("/api/users/me");
    return data;
  } catch (error) {
    return Error;
  }
};
