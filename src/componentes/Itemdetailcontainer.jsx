import React, {useState, useEffect} from "react";
import Itemdetail from "./Itemdetail";

const Producto = {id:1, image: "../images/gibson-lespaul-bonamassa.png", tittle: "Gibson les paul Joe Bonamassa", price: "usd 900" }

const Itemdetailcontainer = () => {

    const [item, setItem] = useState ({}) 
    
    useEffect (() => {

        const getItem = new Promise (resolve => {
            setTimeout(() => {
                resolve(Producto)
            }, 2000)
        })

        getItem.then(res => setItem(res))
    },[])
    
    return (
        
        
        <Itemdetail item={item} />
    )


}

export default Itemdetailcontainer