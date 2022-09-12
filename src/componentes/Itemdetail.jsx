import React from "react";

const Itemdetail = ({item}) => {
    return (
        <div className="col-md-2 mt-8">
            <div className="card"></div>
            <img src={item.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{item.tittle}</h5>
                <p className="card-text">{item.price}</p>
                 
            </div>
        </div>
    )

}

export default Itemdetail