import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.15.9:3008/api/v1/",
  headers: {
    "Content-type": "application/json"
  }
});