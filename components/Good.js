import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from 'antd';

export default function Good(props) {

    const [goods, setGoods] = useState([]);

    const [elemen, setElemen] = useState({});

    console.log(elemen);

    useEffect(() => {
        fetch(`https://antique-api.herokuapp.com/api/goods/${props.match.params.id}`).then(res => res.json()).then((data) => {
            
            setGoods(data);
        });
    }, []);

    const handleSaleGood = (_id, title, price, about, photo, dateOfPlacement) => {
        let dateOf = String(new Date());
        let arrDate = dateOf.split(' ');

        let dateOfSale = [];
        dateOfSale.push(arrDate[3]);

        if (arrDate[1] === 'Jan') {
            dateOfSale[1] = '01';
        } else if (arrDate[1] === 'Feb') {
            dateOfSale.push('02')
        } else if (arrDate[1] === 'Mar') {
            dateOfSale.push('03')
        } else if (arrDate[1] === 'Apr') {
            dateOfSale.push('04')
        } else if (arrDate[1] === 'May') {
            dateOfSale.push('05')
        } else if (arrDate[1] === 'Jun') {
            dateOfSale.push('06')
        } else if (arrDate[1] === 'Jul') {
            dateOfSale.push('07')
        } else if (arrDate[1] === 'Aug') {
            dateOfSale.push('08')
        } else if (arrDate[1] === 'Sep') {
            dateOfSale.push('09')
        } else if (arrDate[1] === 'Oct') {
            dateOfSale.push('10')
        } else if (arrDate[1] === 'Nov') {
            dateOfSale.push('11')
        } else if (arrDate[1] === 'Dec') {
            dateOfSale.push('12')
        }

        dateOfSale.push(arrDate[2]);

        let todayDate = dateOfSale.join('.');

        let good = {
            _id: _id,
            title: title,
            price: price,
            about: about,
            photo: photo,
            dateOfPlacement: dateOfPlacement,
            dateOfSale: todayDate,
            token: localStorage.getItem('antiqueToken')
        }

        console.log('-------correctObject---->', good);

        fetch(`https://antique-api.herokuapp.com/api/goods/sale/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(good)
        }).then((data) => {
            console.log('response: ----> ', data);
            window.location.href = '/archive';
        })

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
                    return <div key={_id} className="miniConteinerForGoodSub">
                        <Image className="photoGoodsSub" style={divStyle} width={200} src={photo} alt="photo goods" />
                        <div className="miniGoodCont">
                            <h2 className="titleOfGoodsSub">{title}</h2>
                            <p className="paragraphOfGoodsSub">{about}</p>
                            <p className="dateOfGoodsSub">Дата размещения: {dateOfPlacement}</p>
                            <h3 className="priceGoodsSub">Цена: {price} руб.</h3>
                            <div className="miniButton">
                                <Link to={`/goods/edit/${props.match.params.id}`}><Button className="buttonEditSub">изменить</Button></Link>
                                <Button onClick={() => handleSaleGood(_id, title, price, about, photo, dateOfPlacement)} className="buttonResetSub">продано</Button>
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}