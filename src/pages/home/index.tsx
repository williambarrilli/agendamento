import styles from "./styles.module.scss";
import ButtonsView from "../../views/home/buttonsView";
import BannerComponent from "../../components/banner";
import { useParams } from "react-router-dom";
import { getShopInfo } from "../../controllers/firestore";
import { useEffect, useMemo, useState } from "react";
import { Shop } from "../../types/shop";

export default function Home() {
  const { loja } = useParams();
  const [loading, setLoading] = useState(true);
  const [shop, setShop] = useState<Shop>();

  useEffect(() => {
    setLoading(true);
    getShopInfo(loja?.toString())
      .then((response) => {
        setShop(response);
        setLoading(false); // Altera o estado para "false" quando o pedido é concluído
      })
      .catch((error) => {
        console.error("Erro ao buscar informações da loja:", error);
        setLoading(false); // Altera o estado para "false" mesmo em caso de erro
      });
  }, [loja]);

  // Verifica se ainda está carregando
  if (loading) {
    return <div>Carregando...</div>; // Mostra um indicador de carregamento enquanto espera
  }
  if (!loading && !shop?.url)
    return <div>ops, não encontramos este endereço</div>;
  return (
    <>
      <BannerComponent bannerImage={shop && shop.url} />
      <h1 className={styles.text}> {shop?.name} </h1>
      <ButtonsView />
    </>
  );
}
