import axios from "axios";

export interface coffee {
  title: string;
  ingredients: string[];
  id: number;
  image: string;
}
export async function fetchHot() {
  const data = await axios.get<coffee[]>(
    "https://api.sampleapis.com/coffee/hot"
  );
  return data.data;
}
