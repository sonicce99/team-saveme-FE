import { axiosInstance } from "./TokenApi";
import { LocationNumber } from "../hooks/UseTransfer.js";
import { useQuery } from "react-query";

export const QUERY_KEYS = {
  all: ["saramin"],
  lists: () => [...QUERY_KEYS.all, "list"],
  list: (filters) => [...QUERY_KEYS.lists(), { filters }],
  details: () => [...QUERY_KEYS.all, "detail"],
  detail: (id) => [...QUERY_KEYS.details(), id],
};

export const searchResultApi = async (value, selected, page) => {
  const LocationString = LocationNumber(selected).join();
  const data = await axiosInstance.get(
    `/api/jobs/list?start=${page}&keywords=${value}&loc_cd=${LocationString}&count=10`
  );
  return data.data.data;
};

/* 임시 */
const fetchStarData = () => {
  return axiosInstance.get("/api/users/wishList").then((value) => value.data);
};

export const useGetStarData = () => {
  const { isLoading, data } = useQuery(
    QUERY_KEYS.list("star"),
    () => fetchStarData(),
    { refetchOnWindowFocus: false }
  );
  return { isLoading, data };
};

export const useGetStarAllData = () => {
  const { isLoading, data } = useQuery(
    QUERY_KEYS.list("starAll"),
    () => fetchStarData(),
    { refetchOnWindowFocus: false }
  );
  return { isLoading, data };
};

export const wishJob = async (job) => {
  const data = await axiosInstance.post("/api/users/wish", job);
};

// export const useGetSearchData = (value, selected) => {
//   const { isLoading, data } = useQuery(
//     QUERY_KEYS.list(value,selected),
//     () => searchResultApi(value, selected),
//     { refetchOnWindowFocus: false }
//   );
//   return { isLoading, data};
// }
