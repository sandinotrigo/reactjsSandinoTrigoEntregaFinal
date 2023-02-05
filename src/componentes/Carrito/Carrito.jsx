import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



function Carrito ({preorder, cart, setCart,products}) {
    const [total, setTotal] = useState(0)
        useEffect(() => {
            let thisTotal = 0
            setCart(products.map((d) => {
                if(preorder[d.id]) {
                    console.log("oi")
                    // setTotal(t => t + d.price * preorder[d.id])
                    thisTotal += d.price * preorder[d.id]
                    setTotal(thisTotal)
                    return({
                            title: d.title,
                            cantidad: preorder[d.id],
                            price: d.price
                          })
                }
            }))
        }, [])
        console.log("cart", cart)
        const navigate=useNavigate()
    return(<main>
            {cart.map((i, k) => {
                if(i !== undefined) return (
                <>
                    <p>{i.title}</p>
                    <p>{(i.price) * i.cantidad}</p>
                    <p>{i.cantidad}</p>
                </>
                )
            })}
            <p>Total a pagar: {total}</p>
            <button onClick={()=>navigate("/confirmacioncompra")}>Confirmar Compra</button>
    </main>)
}

export default Carrito
