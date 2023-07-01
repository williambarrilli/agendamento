import styles from "./styles.module.scss";
import ButtonsView from "../../views/home/buttonsView";
import BannerComponent from "../../components/banner";
import { useParams } from "react-router-dom";

import Loading from "../../components/loading";
import Error from "../../pages/error";
import { useGetShopByUrl } from "../../hook/getShopByUrl";

export default function HomeShop() {
  const { loja } = useParams();

  const { data, isLoading } = useGetShopByUrl(loja?.toString());

  if (!isLoading) {
    return <Loading />;
  }
  if (data?.url)
    return (
      <>
        <BannerComponent bannerImage={data && data.url} />
        <h1 className={styles.text}> {data?.name} </h1>
        <ButtonsView shop={data} />
      </>
    );
  return <Error message="Página não encontrada." />;
}
