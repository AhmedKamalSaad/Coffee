import { fetchCold } from "../utils/useCold";
import Products from "./Products";
const Cold = async () => {
  const data = await fetchCold();
  return (
    <Products data={data} text="Cold"/>
  );
};

export default Cold;
