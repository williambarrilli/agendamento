import { Reserved } from "../types/reserved";
import axios from "axios";
import { Shop } from "../types/shop";

export const sendReservedRequest = async (
  id: string,
  shop: Shop,
  reserved: Reserved
) => {
  try {
    shop.solicitationList.push(reserved);
    const { data } = await axios.put(
      `http://localhost:3000/shops/${id}`,
      shop,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("solicitação de reserva enviada:", data);
  } catch (error) {
    console.error(error);
  }
};

export const getShopByIdRequest = async (id: string) => {
  try {
    const { data } = await axios.get<Shop[]>(
      `http://localhost:3000/shops/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateReserved = async (
  id: string,
  shop: Shop,
  reserved: Reserved
) => {
  try {
    shop.solicitationList.push(reserved);
    const { data } = await axios.put(
      `http://localhost:3000/shops/${id}`,
      shop,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("solicitação de reserva alterada:", data);
  } catch (error) {
    console.error(error);
  }
};
