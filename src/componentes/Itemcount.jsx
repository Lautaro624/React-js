import React, {useState, useEffect} from "react"

export const Itemcount = ({initial, stock, onAdd}) => {
    
    const [count, setCount] = useState (initial)

    const decrementar = () => {

        setCount (count - 1)
    }
   
    const incrementar = () => {

        setCount (count + 1)
    }

    useEffect (() => {
        setCount (parseInt(initial))
    }, [initial])
    
    
    return (
        <div className="contador">
            <button disabled={ count <=1 } onClick={decrementar}> - </button>
            <span> {count} </span>
            <button disabled={ count >= stock } onClick={incrementar}> + </button>
            <div> 
                <button disabled={ stock <= 0 } onClick={() => onAdd (count)}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default Itemcount 