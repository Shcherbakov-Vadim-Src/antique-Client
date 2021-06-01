import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Good from './Good';

export default function Goods() {

    const [goods, setGoods] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3025/api/goods').then(res => res.json()).then((data) => {
        // console.log('------ data ----->', data);
        setGoods(data);
        });
    }, []);


    const handleDeleteGood = (_id) => {
        fetch(`http://localhost:3025/api/goods/${_id}`, {
          method: 'DELETE'
        }).then(() => {
          window.location.reload(); 
      })}

    return (
        <div className="conteinerFirst">
            <div></div>
            <div></div>
            <div>
                <div className="listConteinerForGoods">
                {goods.map(({ _id, title, price, photo }) => {
                        return <div key={_id} className="miniConteinerForGood">
                                    <button className="buttonEdit" onClick={() => handleDeleteGood(_id)}>удалить</button>
                                    <Link to={`/goods/${_id}`}><h2 className="titleOfGoods" >{title}</h2></Link>
                                    <img className="photoGoods" src={photo} alt="photo goods" />
                                    <h3 className="priceGoods">Цена: {price} руб.</h3>
                            </div>
                    })
                }
                </div>
            </div>
        </div>
    )

}