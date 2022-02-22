import axios from "axios";

const URL =
  window.location.hostname === "localhost" ? "/" : "https://183.99.247.17:8881";

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwiZXhwIjoxNjQ2Mzk5ODUzLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIn0.hMImemDgAm5gsY9ItJ_3w65bJz4WXQ0jlKEcrvHhCrUwuWtUcNJpAO1QZ6dgcwwORFxBsPSkr94BNKBr_RTBrQ",
  },
});
