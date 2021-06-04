import React, { useState, useEffect } from "react";


export default function ClientGood(props) {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3025/api/goods/${props.match.params.id}`).then(res => res.json()).then((data) => {
            // console.log('----- data ----->', data);
            setGoods(data);
        });
    }, []);


    return (
        <div className="goodPageConteinerSub">
            <div className="listConteinerForGoodsSub">
                {goods.map(({ _id, title, price, about, photo, dateOfPlacement }) => {
                    return <div  key={_id} className="miniConteinerForGoodSub">
                        <h2 className="titleOfGoodsSub">{title}</h2>
                        <img className="photoGoodsSub" src={photo} alt="photo goods" />
                        <p className="paragraphOfGoodsSub">{about}</p>
                        <p className="dateOfGoodsSub">Дата размещения: {dateOfPlacement}</p>
                        <h3 className="priceGoodsSub">Цена: {price} руб.</h3>
                    </div>
                })
                }
            </div>
        </div>
    )
}