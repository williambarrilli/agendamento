import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "init-firebase";
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const getImageStorage = async (nameFile: string) => {
  const imageRef = ref(storage, `/shop-banners/${nameFile}.jpg`);
  return await getDownloadURL(imageRef)
    .then((url: string) => url)
    .catch((error) => {
      console.error(error);
    });
};
