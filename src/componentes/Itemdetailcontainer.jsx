import React, {useState, useEffect} from "react";
import Itemdetail from "./Itemdetail";
import Productos from "./Productos";
import { useParams } from "react-router-dom";


const Itemdetailcontainer = () => {
    const [item, setItem] = useState ({});
    const { detalleId } = useParams(); 
    
    useEffect(() => {
        const getItem = new Promise (resolve => {
            setTimeout (() => {
                resolve(Productos);
            }, 2000);
        });
        getItem.then(res => setItem(res.find(producto => producto.id === parseInt(detalleId))));
    }, [])
    
    
    return (
        
        
        <Itemdetail item={item} />
    )


}

export default Itemdetailcontainer