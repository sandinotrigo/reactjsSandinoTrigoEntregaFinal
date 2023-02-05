import Card1 from "../Otros/Card/Card1";
import Flexcontainer1 from "../Otros/Flex/Flexcontainer1";
function Itemlistcontainer ({ products, setPreorder, preorder }){
    
return(
    
    <Flexcontainer1>
    {products.map((item, k) =>{
    return <Card1 key={k} item={item} setPreorder={setPreorder} preorder={preorder}/>
    })}
    
    </Flexcontainer1>
    );
    
}
export default Itemlistcontainer;