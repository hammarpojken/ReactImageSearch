import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID da192fb1ed13c93de74316677ad0deeb8d8bbd34e532242664e8ff02c0b1736a"
  }
});
