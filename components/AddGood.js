import React, { useState } from "react";
import { Input, Button } from 'antd';



export default function AddGood() {

    const [goods, setGoods] = useState([]);
 

    const fileSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target); // event.target is the form
        data.set('token', localStorage.getItem('antiqueToken')); 

        fetch(event.target.action, {
            method: 'POST',
            body: data
      
        }).then((resp) => {
            return resp.json();
            //console.log(resp.json());
      
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
        <div className="goodAddPage">
            
                     <form onSubmit={fileSubmit} className="addForm" action="http://localhost:3025/addgoods" method="post" enctype="multipart/form-data">
                     <div className="addGoodsSub">
                        <div className="addInputTitle">
                            <p className="addTitleMini">Наименование:</p>
                            <div className="addInputDiv">
                                <Input type="text" className="addInput" placeholder="введите наименование" name="title" />
                            </div>
                        </div>
                        <div className="addPhotoMiniBox">
                            <p className="addTitleMiniTwo">Фото:</p>
                            <div className="addInputTwoDiv">
                                <Input type="file" className="addInputTwo" name="avatar" />
                            </div>
                        </div>
                        <div className="addAboutBox">
                            <p className="addAboutP">Описание:</p>
                            <div className="addAboutInputDiv">
                                <Input type="text" className="addAboutInput" placeholder="введите описание" name="about" />
                            </div>
                        </div>
                        <div className="addAboutInputBox">
                            <p className="addAbout">Категория:</p>
                            <div className="addAboutInputNext">
                                <Input type="text" className="addAboutInput" placeholder="введите категорию" name="category" />
                            </div>
                        </div>
                        <div className="addInputDateBox">
                            <p className="addAboutDate">Дата:</p>
                            <div className="addInputDateDiv">
                                <Input type="text" className="addInputDate" placeholder='сегодняшняя дата' name="date" />
                            </div>
                        </div>
                        <div className="addInputPriceBox">
                            <p className="addMini">Цена:</p>
                            <div className="addInputPriceDiv">
                                <Input type="text" className="addPrice" placeholder="введите стоимость" name="price" />
                            </div>
                            </div>
                        <div className="addFormButton">
                            <Button className="addButton" name="button" htmlType="submit">Добавить</Button>
                        </div>
                        </div>
                    </form>
        </div>
    )
}