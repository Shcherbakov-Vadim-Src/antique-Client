import React, { useState, useEffect } from "react";
import { Button, Image } from 'antd';

export default function ClientGood(props) {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3025/api/goods/${props.match.params.id}`).then(res => res.json()).then((data) => {
            setGoods(data);
        });
    }, []);

    const handlerClick = () => {
        window.location.href = '/contacts';
    }

    const divStyle = {
        width: '505px',
        borderRadius: '2%',
        height: '402px'
    };


    return (
        <div className="goodPageConteinerSub">
            <div className="listConteinerForGoodsSub">
                {goods.map(({ _id, title, price, about, photo, dateOfPlacement }) => {
                    return <div  key={_id} className="miniConteinerForGoodSub">                        
                        <Image className="photoGoodsS" style={divStyle} width={200} src={photo} alt="photo goods" />                    
                        <div className="miniContForGoodSub">
                            <h2 className="titleOfGoodsSub">{title}</h2>
                            <p className="paragraphOfGoodsSub">{about}</p>
                            <p className="dateOfGoodsSub">Дата размещения: {dateOfPlacement}</p>
                            <h3 className="priceGoodsSub">Цена: {price} руб.</h3>
                            <Button className="cliButton" onClick={handlerClick} name="button">Связаться с продавцом</Button>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}