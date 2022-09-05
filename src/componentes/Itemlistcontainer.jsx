import React from "react";
import Itemcount from "./Itemcount";

const Itemlistcontainer = (props) => {

    const onAdd = (valor) => {
        console.log(` Productos seleccionados ${valor}`)
    }
    
return (
    <div>
        <h1>{props.greeting}</h1>
        <Itemcount initial={ 1 } stock={ 10 } onAdd={ onAdd } />
    
    </div>
)
}

export default Itemlistcontainer