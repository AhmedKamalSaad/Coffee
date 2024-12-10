import axios from "axios";
import { coffee } from "./useHot";

export async function fetchCold() {
  const data = await axios.get<coffee[]>(
    "https://api.sampleapis.com/coffee/iced"
  );
  return data.data;
}
