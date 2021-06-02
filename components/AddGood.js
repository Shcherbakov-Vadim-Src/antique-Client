import React, { useState } from "react";



export default function AddGood() {

    const [goods, setGoods] = useState([]);
    const [url, setUrl] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];

        // save photo to storage

        
        // fetch(`https://api.imgur.com/3/image`, {
        //     method: 'POST',
        //     mode: 'no-cors'
        //     body: 
        // })
        

        // console.log('add ------>', data);
        const good = {
            category: [data[3]],
            title: data[0],
            price: data[5],
            about: data[2],
            photo: 'https://thumbs.dreamstime.com/b/%D0%B4%D1%80%D0%B5%D0%B2%D0%BD%D1%8F%D1%8F-%D0%B1%D1%80%D0%BE%D0%BD%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BC%D0%BE%D0%BD%D0%B5%D1%82%D0%B0-%D0%B8%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0-%D1%82%D1%80%D0%B0%D1%8F%D0%BD%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BE%D1%82-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-160645117.jpg',
            dateOfPlacement: data[4],
            dateOfSale: ''
        };

        fetch(`http://localhost:3025/api/goods`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(good)
        }).then((data) => {
            console.log('response: ----> ',data);
            let rasp = data.json();
            console.log('rasp: ------> ', rasp);
            rasp.then((data) => {
                let clone = [...goods];
                clone.push(data);
                setGoods(clone);
            })
        })
        event.target.reset();
    }


    return (
        <div className="goodAddPage">
            <div className="addGoodsSub">
                     <form onSubmit={onSubmit} className="addForm" method="post" enctype="multipart/form-data">
                        <div>
                            <p className="addTitleMini">Наименование:</p>
                            <input type="text" className="addInput" placeholder="введите наименование" name="title" />
                        </div>
                        <div>
                            <p className="addTitleMini">Фото:</p>
                            <input type="file" className="addInput" placeholder='add photo' />
                        </div>
                        <div>
                            <p className="addAbout">Описание:</p>
                            <input type="text" className="addAboutInput" placeholder="введите описание" name="about" />
                        </div>
                        <div>
                            <p className="addAbout">Категория:</p>
                            <input type="text" className="addAboutInput" placeholder="введите категорию" name="category" />
                        </div>
                        <div>
                            <p className="addAboutDate">Дата:</p>
                            <input type="text" className="addInputDate" placeholder='сегодняшняя дата' name="date" />
                        </div>
                        <div>
                            <p className="addMini">Цена:</p>
                            <input type="text" className="addPrice" placeholder="введите стоимость" name="price" />
                        </div>
                        <button className="addButton" name="button" type="submit">Добавить</button>
                    </form>
            </div>
        </div>
    )
}