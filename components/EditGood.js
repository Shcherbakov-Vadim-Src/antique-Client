import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';


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
            
            console.log('body', body);
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
                        <Input type="text" className="editInput" placeholder={title} name="title" />
                        <img className="photoEdit" src={photo} alt="photo goods" />
                        <Input className="editAboutInputFile" type="file" name="avatar" />
                        <div className="editContBox">
                            <p className="editAbout">Описание:</p>
                            <Input type="text" className="editAboutInput" placeholder={about} name="about" />
                        </div>
                        <div className="editContBox">
                            <p className="editAbout">Категория:</p>
                            <Input type="text" className="editAboutInput" placeholder='Категория товара' name="category" />
                        </div>
                        <div className="editContBox">
                            <p className="editAboutDate">Дата:</p>
                            <Input type="text" className="editInputDate" placeholder='Сегодняшняя дата' name="date" />
                        </div>
                        <div className="editContBox">
                            <p className="editMini">Цена:</p>
                            <Input type="text" className="inputPrice" placeholder={price} name="price" />
                        </div>
                        <Button className="editButton" name="button" htmlType="submit">Изменить</Button>
                    </form>
                })
                }
            </div>
        </div>
    )
}