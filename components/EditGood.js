import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';


export default function EditGood(props) {

    const [goods, setGoods] = useState([]); 

    const [file, setFiles] = useState(''); 

    const [imagePreviewUrl, setImagePreviewUrl] = useState(''); 

    useEffect(() => {
        fetch(`http://localhost:3025/api/goods/${props.match.params.id}`).then(res => res.json()).then((data) => {
            setGoods(data);
        });
    }, []);

    const handleImageChange = (event) => {  
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            setFiles(file);
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
    }
  
    const fileSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target); 
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
        window.location.href = '/goods';  
    }

    return (
        <div className="goodPageConteinerSubEdit">
            <div className="listConteinerForGoodsSub">
                {goods.map(({ _id, title, price, about, photo }) => {
                    return <form onSubmit={fileSubmit} key={_id} className="editForm" action={`http://localhost:3025/api/goods/${_id}`} method="put" enctype="multipart/form-data">
                        <div className="photoEditBox">
                            <img className="photoEdit" src={imagePreviewUrl ? imagePreviewUrl : photo} alt="photo goods" />
                        </div>      
                        <div className="editBoxSub">
                            <div className="editInputFileDiv">
                                <Input className="editAboutInputFile" type="file" name="avatar" onChange={(event)=>handleImageChange(event)} />
                            </div>                
                            <div className="editInputNameDiv">
                                <p className="editMiniP">Наименование:</p>
                                <div className="editInputDiv">
                                    <Input type="text" className="editInput" placeholder={title} name="title" />
                                </div>
                            </div>
                            <div className="editContBox">
                                <p className="editAbout">Описание:</p>
                                <div className="aboutInputDiv">
                                    <Input type="text" className="editAboutInput" placeholder={about} name="about" />
                                </div>                        
                            </div>
                            <div className="editContBox">
                                <p className="editAbout">Категория:</p>
                                <div className="editAboutInputDiv">
                                    <Input type="text" className="editAboutInput" placeholder='Категория товара' name="category" />
                                </div>
                            </div>
                            <div className="editContBox">
                                <p className="editAboutDate">Дата:</p>
                                <div className="editInputDateDiv">
                                <Input type="text" className="editInputDate" placeholder='Сегодняшняя дата' name="date" />
                                </div>
                            </div>
                            <div className="editContBox">
                                <p className="editMini">Цена:</p>
                                <div className="inputPriceDiv">
                                    <Input type="text" className="inputPrice" placeholder={price} name="price" />
                                </div>
                            </div>
                            <div className="editButtonDiv">
                                <Button className="editButton" name="button" htmlType="submit">Изменить</Button>
                            </div>
                        </div>                    
                    </form>
                })
                }
            </div>
        </div>
    )
}