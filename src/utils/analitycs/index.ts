import { getAnalytics, logEvent } from "firebase/analytics";

export const logPageAnalytics = (
  page: string,
  shop?: string,
  options?: object
) => {
  logEvent(getAnalytics(), "page_view", { ...options, name: page, shop });
};
