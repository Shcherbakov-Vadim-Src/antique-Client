import React, { useState } from "react";



export default function AddGood() {

    const [goods, setGoods] = useState([]);
 

    const fileSubmit = (event) => {
        event.preventDefault();

        fetch(event.target.action, {
            method: 'POST',
            body: new FormData(event.target) // event.target is the form
      
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
            <div className="addGoodsSub">
                     <form onSubmit={fileSubmit} className="addForm" action="http://localhost:3025/addgoods" method="post" enctype="multipart/form-data">
                        <div>
                            <p className="addTitleMini">Наименование:</p>
                            <input type="text" className="addInput" placeholder="введите наименование" name="title" />
                        </div>
                        <div>
                            <p className="addTitleMini">Фото:</p>
                            <input type="file" className="addInput" name="avatar" />
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