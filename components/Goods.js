import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export default function Goods() {

    const [goods, setGoods] = useState([]);


    useEffect(() => {
        fetch('https://antique-api.herokuapp.com/api/goods').then(res => res.json()).then((data) => {
        setGoods(data);
        });
    }, []);


    const handleDeleteGood = (_id) => {
        
        const token = localStorage.getItem('antiqueToken');

        fetch(`https://antique-api.herokuapp.com/api/goods/${_id}?token=${token}`, {
          method: 'DELETE'
        }).then(() => {
           window.location.reload(); 
      })}

    return (
        <div className="conteinerFirst">
            <div>
                <div className="clickGoodCont">
                    <Link to="/goods/add"><Button className="addClickGood">Добавить товар</Button></Link>
                </div>
            </div>
            <div></div>
            <div className="transformGoods">
                <div className="listConteinerForGoods">
                {goods
                .filter((good) => {
                        return good.dateOfSale === ''
                    })
                .map(({ _id, title, price, photo }) => {
                        return (
                            <div key={_id} className="miniConteinerForGood">
                                <Button type="text" className="buttonEdit" icon={<CloseOutlined />} onClick={() => handleDeleteGood(_id)}></Button>
                                <img className="photoGoods" src={photo} alt="photo goods" />
                                <Link to={`/goods/${_id}`}><h2 className="titleOfGoods" >{title}</h2></Link>
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