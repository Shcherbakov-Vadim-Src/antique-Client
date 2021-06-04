import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Goods() {

    const [goods, setGoods] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3025/api/goods').then(res => res.json()).then((data) => {
            setGoods(data);
        });
    }, []);


    return (
        <div className="conteinerFirst">
            <div>
                <div className="listConteinerForGoods">
                    {goods
                        .filter((good) => {
                            return good.dateOfSale === ''
                        })
                        .map(({ _id, title, price, photo }) => {
                            return <div key={_id} className="miniConteinerForGood">
                                <Link to={`/client/goods/${_id}`}><h2 className="titleOfGoods" >{title}</h2></Link>
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