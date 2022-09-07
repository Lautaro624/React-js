import React from "react";
import Item from "./Item";

const Itemlist = ({data = []}) => {
    return(
        data.map(productos => <Item key={productos.id} info={productos}/>)
    )
}

export default Itemlist