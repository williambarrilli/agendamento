import styles from "./styles.module.scss";
import ButtonsView from "../../views/home/buttonsView";
import BannerComponent from "../../components/banner";
import { useParams } from "react-router-dom";
import { addData, getShopInfo } from "../../controllers/firestore";
import { useEffect, useState } from "react";
import { Shop } from "../../types/shop";
import { getSessionStorage } from "../../utils/sessionStorage";

export default function Home() {
  const { loja } = useParams();
  const [loading, setLoading] = useState(true);
  const [shop, setShop] = useState<Shop>();

  const session: Shop = getSessionStorage("shopData");

  //TODO refatorar
  useEffect(() => {
    setLoading(true);
    if (session?.url && session?.url === loja) {
      setShop(session);
      setLoading(false);
    } else {
      getShopInfo(loja?.toString())
        .then((response) => {
          setShop(response);
          setLoading(false); // Altera o estado para "false" quando o request é concluído
        })
        .catch((error) => {
          console.error("Erro ao buscar informações da loja:", error);
          setLoading(false); // Altera o estado para "false" mesmo em caso de erro
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Verifica se ainda está carregando
  if (loading) {
    return <div className={styles.content}>Carregando...</div>; // Mostra um indicador de carregamento enquanto espera
  } else if (!loading && !shop?.url)
    return (
      <div className={styles.content}>ops, não encontramos este endereço</div>
    );
  else if (shop?.url)
    return (
      <>
        <BannerComponent bannerImage={shop && shop.url} />
        <h1 className={styles.text}> {shop?.name} </h1>
        <ButtonsView shop={shop} />
      </>
    );
  return <></>;
}
