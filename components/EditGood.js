import React, { useState, useEffect } from "react";



export default function EditGood(props) {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3025/api/goods/${props.match.params.id}`).then(res => res.json()).then((data) => {
            setGoods(data);
        });
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];
        // console.log('------>', data);
        const good = {
            category: [data[2]],
            title: data[0],
            price: data[4],
            about: data[1],
            photo: 'https://thumbs.dreamstime.com/b/%D0%B4%D1%80%D0%B5%D0%B2%D0%BD%D1%8F%D1%8F-%D0%B1%D1%80%D0%BE%D0%BD%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BC%D0%BE%D0%BD%D0%B5%D1%82%D0%B0-%D0%B8%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0-%D1%82%D1%80%D0%B0%D1%8F%D0%BD%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BE%D1%82-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE-160645117.jpg',
            dateOfPlacement: data[3],
        };

        fetch(`http://localhost:3025/api/goods/${props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(good)
        }).then((data) => {
            // console.log('response: ----> ',data);
            let rasp = data.json();
            // console.log('rasp: ------> ', rasp);
            rasp.then((data) => {
                let clone = [...goods];
                clone.push(data);
                setGoods(clone);
            })
        })
        event.target.reset();
    }

    return (
        <div className="goodPageConteinerSub">
            <div className="listConteinerForGoodsSub">
                {goods.map(({ _id, title, price, about, photo }) => {
                    return <form onSubmit={onSubmit} key={_id} className="editForm">
                        <p className="editMini">Наименование:</p>
                        <input type="text" className="editInput" placeholder={title} name="title" />
                        <img className="photoEdit" src={photo} alt="photo goods" />
                        <p className="editAbout">Описание:</p>
                        <input type="text" className="editAboutInput" placeholder={about} name="about" />
                        <p className="editAbout">Категория:</p>
                        <input type="text" className="editAboutInput" placeholder='Категория товара' name="category" />
                        <p className="editAboutDate">Дата:</p>
                        <input type="text" className="editInputDate" placeholder='Сегодняшняя дата' name="date" />
                        <p className="editMini">Цена:</p>
                        <input type="text" className="inputPrice" placeholder={price} name="price" />
                        <button className="editButton" name="button">Изменить</button>
                    </form>
                })
                }
            </div>
        </div>
    )
}