import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Tipoproducto = ( {PropertyDetail} ) => {
    const [item, setItem] = useState([{
        id:"",
    title:"", 
    price:0, 
    tipo: "",
    imgurl:"",
    }]);
    
    const {tipo}= useParams()
    useEffect(() =>{
        for(let i = 0; i < PropertyDetail.length; i++){
         if(PropertyDetail[i].tipo === tipo) {
            let filtered = PropertyDetail.filter(f=>f.tipo === tipo)
            setItem(filtered)
        }
        
        }
    },[])


    return (

        <>
        {console.log(item)}
        {/* Lo ideal aca es crear otro componente ItemDetail y pasarle por props item, lo mismo que onAdd debe estar creada en ItemDetail */}
        {item.map((o, k) => {
            return (
                <div key={k}>
                    <h2>Detalle de :{o.title}</h2>
                    <img src={o.imgurl} alt={o.title}/>
                    <p>Marca: {o.title}</p>
                    {/* <pPropertyDetail>Tamaño: {item.Tamaño}</pPropertyDetail> */}
                    <p>{o.price}</p>
                </div>
            )})}
        
        </> 
    );
}