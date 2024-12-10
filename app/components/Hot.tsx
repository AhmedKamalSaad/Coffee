import { fetchHot } from "../utils/useHot";
import Products from "./Products";

const Hot = async () => {
  const data = await fetchHot();

  return <Products text="Hot" data={data} />;
};

export default Hot;
