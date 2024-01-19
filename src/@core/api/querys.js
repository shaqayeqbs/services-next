import { useQuery } from "react-query";
import { shopCategories } from "./shopApi";

export function useShopCategories() {
  return useQuery("categories", () => shopCategories({ page: 1 }));
}
