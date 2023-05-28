import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../init-firebase";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { Shop } from "../types/shop";
import { Reserved } from "../types/reserved";
import { EnumStatus } from "../types/enums";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, "shops"), {
      name: "Juliana Silva",
      url: "juliana-silva",
      phone: "1500",
      instagram: "",
      reservedList: [],
      solicitationList: [],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getSolicitationList = async (shopId: string) => {
  const documentRef = doc(db, "shops", shopId);
  const docSnapshot = await getDoc(documentRef);
  if (docSnapshot.exists()) {
    const documentData = docSnapshot.data();
    return documentData.solicitationList;
  }
};

export const sendSolicitationReserved = async (
  shopId: string,
  reserved: Reserved
) => {
  try {
    // qnd user solicita reserva
    // const dataShopRef = doc(db, "shops", "MLJ0k39Q9ELsH78X3lHW");
    const documentRef = doc(db, "shops", shopId);
    const docSnapshot = await getDoc(documentRef);
    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      documentData.solicitationList.push(reserved);
      // await updateDoc(documentRef, {
      //   solicitationList: documentData?.solicitationList,
      // });
    } else {
      console.log("Document not found");
    }
  } catch (error) {
    console.log("Error getting document:", error);
  }
};

export const updateSolicitationReserve = async (
  shopId: string,
  reserved: Reserved,
  index: number
) => {
  try {
    const documentRef = doc(db, "shops", shopId);
    const docSnapshot = await getDoc(documentRef);
    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      documentData.solicitationList[index] = reserved;
      if (reserved.status === EnumStatus.APROVED) {
        documentData?.reservedList.push(reserved);
      }
      // await updateDoc(documentRef, {
      //   solicitationList: documentData.solicitationList,
      //   reservedList: documentData.reservedLis,
      // });
    } else {
      console.log("Document not found");
    }
  } catch (error) {
    console.log("Error getting document:", error);
  }
};
