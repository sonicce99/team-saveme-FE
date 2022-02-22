import { axiosInstance } from "./TokenApi";
import { LocationNumber } from "../hooks/UseTransfer.js";
import { useQuery } from "react-query";
import axios from "axios";

export const QUERY_KEYS = {
  all: ["stories"],
  lists: () => [...QUERY_KEYS.all, "list"],
  list: (filters) => [...QUERY_KEYS.lists(), { filters }],
  details: () => [...QUERY_KEYS.all, "detail"],
  detail: (id) => [...QUERY_KEYS.details(), id],
};

export const searchResultApi = async (value, selected) => {
  const LocationString = LocationNumber(selected).join();
  const data = await axiosInstance.get(
    `/api/jobs/list?start=${0}&keywords=${value}&loc_cd=${LocationString}&count=10`
  );
  return data.data.data;
};

/* 임시 */
const fetchStarData = () => {
  return axios
    .get(
      "https://183.99.247.17:8881/api/jobs/list?start=0&keywords=백엔&loc_cd=101000&count=5"
    )
    .then((value) => value.data);
};

export const useGetStarData = () => {
  const { isLoading, data } = useQuery(
    QUERY_KEYS.list("star"),
    () => fetchStarData(),
    { refetchOnWindowFocus: false }
  );
  return { isLoading, data };
};
