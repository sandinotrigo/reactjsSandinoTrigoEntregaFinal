import './itemcountstyles.css';
import React,{ useState} from 'react';

export const ItemCount = ({initial, stock, onAdd, setPreOrder, preorder, id}) => {
    const [count, setCount]=useState(initial)

const submitPurchase = () => {
    let total = 0;
    if (preorder[id] > 0) {
      total = preorder[id] + count;
    } else {
      total = count;
    }
    setPreOrder({ ...preorder, [id]: total });
    setCount(initial);
    sessionStorage.setItem("preorder", JSON.stringify(preorder));
  };
//el {preorder} viene por porps al componente
//con mi logica el {preopder} tiene formato: {"nombre": numero, "nombre": numero}


    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }



    return(
        <div className='counter'>
            <button disabled={count === 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count === stock} onClick={increase}>+</button>

                <button disabled={stock === 0 } onClick={()=> {submitPurchase()}} >Agregar al carrito</button>

        </div>
    );
}

export default ItemCount;