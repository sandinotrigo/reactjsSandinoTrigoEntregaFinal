
import { initializeApp } from "firebase/app"; // SDK => Soft dev Kit 
import {collection, getFirestore, getDocs} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA9q_kZZjJv_AjAk_0zKhqvTdCKn74Tas8",
  authDomain: "barraca-la-tuerca-reactjs.firebaseapp.com",
  projectId: "barraca-la-tuerca-reactjs",
  storageBucket: "barraca-la-tuerca-reactjs.appspot.com",
  messagingSenderId: "582428562793",
  appId: "1:582428562793:web:b3c5679a3b72a614ec99f8"
};


const app = initializeApp(firebaseConfig);

const basededatos = getFirestore(app);

export function  obtenerProduct_(){
// aca pedimos todos los documentos xd 
// referimos al producto
  const productsRef = collection (basededatos, "products");
  // 2 -> obtenemos con getdocs todos los documentos del firebase
  getDocs(productsRef).then((snapshot) => {

    const title = snapshot.docs.map((elem) => elem.data());
    // console.log(title)
  });
    }



    export async function obtenerProduct() {
      const productsRef = collection (basededatos, "products");
      const snapshot = await getDocs(productsRef)

      const title = snapshot.docs.map ((elem)   => elem.data());
      // console.log (title);
    }

export default basededatos;