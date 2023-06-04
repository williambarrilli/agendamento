import { Reserved } from "./reserved";

export interface Shop {
  id?: string;
  name: string;
  url: string;
  phone: number;
  instagram: string;
  reservedList: Reserved[];
  solicitationList: Reserved[];
  bannerImage: string;
}
