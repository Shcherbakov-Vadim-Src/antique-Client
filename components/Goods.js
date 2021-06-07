import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';

export default function Goods() {

    const [goods, setGoods] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3025/api/goods').then(res => res.json()).then((data) => {
        // console.log('------ data ----->', data);
        setGoods(data);
        });
    }, []);


    const handleDeleteGood = (_id) => {
        
        const token = localStorage.getItem('antiqueToken');

        fetch(`http://localhost:3025/api/goods/${_id}?token=${token}`, {
          method: 'DELETE'
        }).then(() => {
           window.location.reload(); 
      })}

    return (
        <div className="conteinerFirst">
            <div>
                <div className="clickGoodCont">
                    <h2 className="addGoodHeader">Добавление товара:</h2>
                    {/* <Link to="/goods/add"><button className="addClickGood">Нажмите меня</button></Link> */}
                    <Link to="/goods/add"><Button className="addClickGood">Нажмите меня</Button></Link>
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
                        return <div key={_id} className="miniConteinerForGood">
                                    <Button className="buttonEdit" onClick={() => handleDeleteGood(_id)}>удалить</Button>
                                    {/* <button className="buttonEdit" onClick={() => handleDeleteGood(_id)}>удалить</button> */}
                                    <Link to={`/goods/${_id}`}><h2 className="titleOfGoods" >{title}</h2></Link>
                                    <img className="photoGoods" src={photo} alt="photo goods" />
                                    <h3 className="priceGoods">{price} руб.</h3>
                            </div>
                    })
                }
                </div>
            </div>
        </div>
    )

}