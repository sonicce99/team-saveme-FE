import axios from "axios";

const URL =
  window.location.hostname === "localhost" ? "/" : "http://183.99.247.17:8881";

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwiZXhwIjoxNjQ2MzY1ODU0LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIn0.BNZoZxHOQlGAAiWd_eXuRBEIxzR9Jh6uz_XS9j8CGpU38oYVe5N08tHMv82ZGBcmNGZWgWo5o9R7hB9XO6R2Yg",
  },
});
