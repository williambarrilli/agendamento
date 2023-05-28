import { Reserved } from "./reserved";

export interface Shop {
  name: string;
  url: string;
  phone: number;
  instagram: string;
  reservedList: Reserved[];
  solicitationList: Reserved[];
}
