import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import ItemCount from '../itemcount/itemcount';
// DONDE SEA QUE USE 
export const ItemDetailContainer = ( {PropertyDetail} ) => {
    const [item, setItem] = useState({
        id:"",
    title:"", 
    price:0, 
    imgurl:""
    });
    
    const {id}= useParams()
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    useEffect(() =>{
       for(let i = 0; i < PropertyDetail.length; i++){
        if(PropertyDetail[i].id === id) setItem(PropertyDetail[i])
       }
    
    }, [])
    console.log(PropertyDetail)
    return (

        <>
        {/* Lo ideal aca es crear otro componente ItemDetail y pasarle por props item, lo mismo que onAdd debe estar creada en ItemDetail */}
            <div>
                <h2>Detalle de :{item.title}</h2>
                <img src={item.imgurl} alt={item.title}/>
                <p>Marca: {item.title}</p>
                {/* <pPropertyDetail>Tamaño: {item.Tamaño}</pPropertyDetail> */}
                <p>{item.price}</p>
                
            </div>
        </> 
    );
}