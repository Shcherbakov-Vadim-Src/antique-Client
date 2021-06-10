import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Goods() {

    const [goods, setGoods] = useState([]);


    useEffect(() => {
        fetch('https://antique-api.herokuapp.com/api/goods').then(res => res.json()).then((data) => {
            setGoods(data);
        });
    }, []);


    return (
        <div className="conteinerFirst">
            <div className="transformGoods">
                <div className="listConteinerForGoods">
                    {goods
                        .filter((good) => {
                            return good.dateOfSale === ''
                        })
                        .map(({ _id, title, price, photo }) => {
                            return (
                                <div key={_id} className="miniConteinerForGood">
                                    <img className="photoGoods" src={photo} alt="photo goods" />
                                    <Link to={`/client/goods/${_id}`}><h2 className="titleOfGoods" >{title}</h2></Link>
                                    <h3 className="priceGoods">{price} руб.</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}