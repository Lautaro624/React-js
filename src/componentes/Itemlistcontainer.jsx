import React, {useState, useEffect} from "react";
import Itemcount from "./Itemcount";
import Itemlist from "./Itemlist";



const productos = [
    {id:1, image: "../images/gibson-lespaul-bonamassa.png", tittle: "Gibson les paul Joe Bonamassa", price: "usd 900"},
    {id:2, image: "../images/epiphone-sg-standard.png", tittle: "Epiphone sg standard 60s", price: "usd 700"},
    {id:3, image: "../images/epiphone-explorer.png", tittle: "Epiphone explorer", price: "usd 650"},
]

const Itemlistcontainer = (props) => {

    const [data, setData] = useState([])

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        })

        getData.then(res => setData(res))

    },[])


    const onAdd = (valor) => {
        console.log(` Productos seleccionados ${valor}`)
    }
    
return (
    <div>
        <h1>{props.greeting}</h1>
        
        <Itemlist data={data} />
        <Itemcount initial={ 1 } stock={ 10 } onAdd={ onAdd } />
    </div>
)
}

export default Itemlistcontainer