import { useParams } from "react-router-dom";
import BannerComponent from "../../components/banner";
import ButtonsView from "../../views/home/buttonsView";
import styles from "./styles.module.scss";

import Loading from "../../components/loading";
import { useGetShopByUrl } from "../../hook/getShopByUrl";
import Error from "../../pages/error";

export default function HomeShop() {
  const { loja } = useParams();

  const { data, isLoading } = useGetShopByUrl(loja?.toString());

  if (data?.url)
    return (
      <>
        <BannerComponent bannerImage={data && data.url} />
        <h1 className={styles.text}> {data?.name} </h1>
        <ButtonsView shop={data} />
      </>
    );

  if (!isLoading) {
    return <Loading />;
  }

  return <Error message="Página não encontrada." />;
}
