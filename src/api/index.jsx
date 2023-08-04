//import axios
import axios from "axios";

const Api = axios.create({
  //set default endpoint API
  baseURL: "https://0638-2001-448a-1082-7bf1-b540-a42-532c-ebac.ngrok-free.app",
});

export default Api;
