import React from "react";
import Item from "./Item";

const Itemlist = ({data = []}) => {
    return(
        data.map(Productos => <Item key={Productos.id} info={Productos}/>)
    )
}

export default Itemlist