import React, { useState, useEffect } from "react";



export default function EditGood(props) {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3025/api/goods/${props.match.params.id}`).then(res => res.json()).then((data) => {
            setGoods(data);
        });
    }, []);

  
    const fileSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target); // event.target is the form
        data.set('token', localStorage.getItem('antiqueToken')); 

        fetch(event.target.action, {
            method: 'PUT',
            body: data 
      
        }).then((resp) => {
            return resp.json();
      
        }).then((body) => {
            
            console.log(body);
            if(body.status) {
                alert(body.message);
            }
            else {
                alert("Please Select a file to upload");
            }
        }).catch((error) => {
            console.log('chto to poshlo ne tak', error);
        });
    }

    return (
        <div className="goodPageConteinerSub">
            <div className="listConteinerForGoodsSub">
                {goods.map(({ _id, title, price, about, photo }) => {
                    return <form onSubmit={fileSubmit} key={_id} className="editForm" action={`http://localhost:3025/api/goods/${_id}`} method="put" enctype="multipart/form-data">
                        <p className="editMini">Наименование:</p>
                        <input type="text" className="editInput" placeholder={title} name="title" />
                        <img className="photoEdit" src={photo} alt="photo goods" />
                        <input className="editAboutInput" type="file" name="avatar" />
                        <p className="editAbout">Описание:</p>
                        <input type="text" className="editAboutInput" placeholder={about} name="about" />
                        <p className="editAbout">Категория:</p>
                        <input type="text" className="editAboutInput" placeholder='Категория товара' name="category" />
                        <p className="editAboutDate">Дата:</p>
                        <input type="text" className="editInputDate" placeholder='Сегодняшняя дата' name="date" />
                        <p className="editMini">Цена:</p>
                        <input type="text" className="inputPrice" placeholder={price} name="price" />
                        <button className="editButton" name="button" type="submit">Изменить</button>
                    </form>
                })
                }
            </div>
        </div>
    )
}