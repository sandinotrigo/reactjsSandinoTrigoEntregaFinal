import "./card1.css";
import Boton1 from "../Botones/Boton1";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { useState } from "react";
function Card1 (props){
    const {title,price,imgurl,id}=props.item;
    const [count, setCount]=useState(0)
        // const navigate = useNavigate()

        const decrease = () => {
            setCount(count - 1);
        }
    
        const increase = () => {
            setCount(count + 1);
        }
        
        const addOrder = () => {
            props.setPreorder({...props.preorder, [id]: count})
            sessionStorage.setItem("preorder", props.preorder)
            console.log(props.preorder)
        }

    return(
    
    <div className="card1">
        <h3>{title}</h3>
        <img height="220px" src={imgurl} alt={title}/>
        <small>{price}</small>
        <Link to="/product/id"><Boton1 >Detalle del producto</Boton1></Link>
        <Boton1 onClick={() => {
            decrease()
        }}>-1</Boton1>
        <Boton1 onClick={() => addOrder()}>anadir al carrito</Boton1>
        <Boton1 onClick={() => {
            increase()
        }}>+1</Boton1> 
    </div>
    );
    
    
}
export default Card1