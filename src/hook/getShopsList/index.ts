import { useEffect, useState } from "react";
import { getShopsList } from "../../controllers/firestore";
import { Shop } from "../../types/shop";

export const useGetShopsListHook = () => {
  const [data, setData] = useState<Shop[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getShopsList()
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};
