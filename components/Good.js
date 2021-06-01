import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Good(props) {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        // const id = req.params.id;
        // console.log('props----->', props.match.params.id);
        fetch(`http://localhost:3025/api/goods/${props.match.params.id}`).then(res => res.json()).then((data) => {
            // console.log('----- data ----->', data);
            setGoods(data);
        });
    }, []);

    return (
        <div className="goodPageConteinerSub">
            <div className="listConteinerForGoodsSub">
                {goods.map(({ _id, title, price, about, photo }) => {
                    return <div  key={_id} className="miniConteinerForGoodSub">
                        <Link to={`/goods/edit/${props.match.params.id}`}><button className="buttonEditSub">редакт.</button></Link>
                        <button className="buttonResetSub" onClick={() => handleSaleGood(_id)}>продано</button>
                        <h2 className="titleOfGoodsSub">{title}</h2>
                        <img className="photoGoodsSub" src={photo} alt="photo goods" />
                        <p className="paragraphOfGoodsSub">{about}</p>
                        <h3 className="priceGoodsSub">Цена: {price} руб.</h3>
                    </div>
                })
                }
            </div>
        </div>
    )
}