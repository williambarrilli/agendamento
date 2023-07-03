import { useParams } from "react-router-dom";
import BannerComponent from "../../components/banner";
import ButtonsView from "../../views/home/buttonsView";
import styles from "./styles.module.scss";

import Loading from "../../components/loading";
import { useGetShopByUrl } from "../../hook/getShopByUrl";
import Error from "../../pages/error";
import { useEffect } from "react";
import { logPageAnalytics } from "utils/analitycs";

export default function HomeShop() {
  const { loja } = useParams();

  useEffect(() => {
    logPageAnalytics("Home Shop", loja?.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, error } = useGetShopByUrl(loja?.toString());

  if (data?.url)
    return (
      <>
        <BannerComponent bannerImage={data && data.url} />
        <h1 className={styles.text}> {data?.name} </h1>
        <ButtonsView shop={data} />
      </>
    );

  if (!data?.url) {
    return (
      <Error
        message="Página não encontrada."
        error={error}
        url={loja?.toString()}
      />
    );
  }

  return <Loading />;
}
