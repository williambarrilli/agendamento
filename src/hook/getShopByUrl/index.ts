import { useEffect, useState } from "react";
import { getShopByUrl } from "../../controllers/firestore";
import { Shop } from "../../types/shop";
import { getSessionStorage } from "../../utils/sessionStorage";

export const useGetShopByUrl = (url?: string) => {
  const [data, setData] = useState<Shop>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const session: Shop = getSessionStorage("shopData");

    if (session?.url === url) return setData(session);

    if (url) {
      getShopByUrl(url)
        .then((response) => {
          setData(response);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, error };
};
