import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function Archive() {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3025/api/goods').then(res => res.json()).then((data) => {
        // console.log('------ data ----->', data);
        setGoods(data);
        });
    }, []);

    // let goods = [
    //     {
    //         _id: '60b4c63ee0a0d708a4b8ab01',
    //         category: "ancient value",
    //         title: "board",
    //         price: 55,
    //         about: "wood board asasasdsd qiuwqwq kasjd123132 akaskdas jp12ieiiiasd klas;asdls qwwqewiqqweiwqeiq asada a1231 o a;kkkkdkasasasqwuffkal kdsl",
    //         photo: "https://i.pinimg.com/originals/f2/b8/36/f2b83668e83403c12437bef316ab640e.jpg",
    //         dateOfPlacement: "2021.05.30",
    //         dateOfSale: "2021.05.30" 
    //     },
    //     {
    //         _id: '60b4c63ee0a0d708a4b8ab01',
    //         category: "ancient value",
    //         title: "skateboard",
    //         price: 255,
    //         about: "wood skateboard asasasdsd qiuwqwq kasjd123132 akaskdas jp12ieiiiasd klas;asdls qwwqewiqqweiwqeiq asada a1231 o a;kkkkdkasasasqwuffkal kdsl",
    //         photo: "https://ae04.alicdn.com/kf/HTB1Mc7oNXXXXXXLaFXXq6xXFXXXt/Zen-Art-H1303.jpg",
    //         dateOfPlacement: "2021.05.30",
    //         dateOfSale: "2021.05.30" 
    //     },
    //     {
    //         _id: '60b4c63ee0a0d708a4b8ab01',
    //         category: "ancient value",
    //         title: "loardboard",
    //         price: 155,
    //         about: "wood loardboard asasasdsd qiuwqwq kasjd123132 akaskdas jp12ieiiiasd klas;asdls qwwqewiqqweiwqeiq asada a1231 o a;kkkkdkasasasqwuffkal kdsl",
    //         photo: "https://i.pinimg.com/736x/a6/92/12/a69212937fe4a9a5d83bf44eae30ec09.jpg",
    //         dateOfPlacement: "2021.05.30",
    //         dateOfSale: "2021.05.30" 
    //     }
    // ]

    return (
        <div className="archivePageConteiner">
             {goods
             .filter((good) => {
                        return good.dateOfSale
                    })
             .map(({ _id, title, price, about, photo, dateOfPlacement, dateOfSale }) => {
                    return <div  key={_id} className="archiveMiniConteiner">
                        <h2 className="titleOfArchive">{title}</h2>
                        <img className="photoGoodArchive" src={photo} alt="photo goods" />
                        <p className="paragraphOfGoodArchive">{about}</p>
                        <p className="priceGoodArchive">Цена: {price} руб.</p>
                        <p className="dateOfGoodArchive">Дата размещения: {dateOfPlacement}</p>
                        <p className="dateSaleArchive">Дата продажи: {dateOfSale}</p>
                    </div>
                })
                }
        </div>
    )
}