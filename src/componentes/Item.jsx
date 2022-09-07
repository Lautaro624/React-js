import React from "react";
import Itemcount from "./Itemcount";

const Item = ({info}) => {
    return (
        
        <div className="col-md-2 mt-8">
            <div className="card"></div>
            <img src={info.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{info.tittle}</h5>
                <p className="card-text">{info.price}</p>
                 <Itemcount/>
            </div>
        </div>
    )
}

export default Item