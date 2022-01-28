import axios from "axios";

const API_URL = "https://auto1-mock-server.herokuapp.com/api/cars";

export async function getData() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
