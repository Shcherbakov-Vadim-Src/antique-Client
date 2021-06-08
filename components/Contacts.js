import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';
import { Link } from "react-router-dom";

export default function Contacts() {


    const getQuestions = (event) => {

        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];

        const mail = {
            name: data[0],
            post: data[1],
            phone: data[2],
            massage: data[3]
        }
        console.log(mail);

        fetch('http://localhost:3025/api/mail', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
              },
            body: JSON.stringify(mail)
        }).then((resp) => {
            return resp.json();
            //console.log(resp.json());
        });

        event.target.reset();
    }

    return (
        <div className="thirdPageConteiner">
            <div className="contactConteinerMini">
                    <form className="contactForm" onSubmit={getQuestions}>
                        <p className="secondParagraphNews" name="second">Оставьте Вашу заявку и я перезвоню.</p>
                        <div className="questionData">
                            <div className="questionData1">                                
                                <div className="inputNameNew">
                                    <Input name="from_name" type="text" placeholder="Ваше имя" />
                                </div>
                                <div className="inputNameNew">
                                    <Input type="email" name="user_email" placeholder="Ваша почта" />
                                </div>
                                <div className="inputNameNew">
                                    <Input name="to_name" type="text" placeholder="Номер телефона" />
                                </div>
                            </div>
                            <div className="questionData2">
                                <textarea className="questionArea" type="text" name="message" placeholder="Опишите Ваш вопрос "></textarea>
                            </div>
                        </div>
                            <div className="inputButtonNe">
                                <Button htmlType="submit">Отправить</Button>
                            </div>
                    </form>
                    <div className="mapAndContact">
                    <div className="yandexMap"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A73bf29da15b84e639e3263b8c8fcbdcd736518971c082240a3bfcbbfb44ccc04&amp;source=constructor" width="536" height="405" frameborder="0"></iframe></div>
                        <div class="mapBox">
                            <Link className="contactsTitle" >Мои контакты</Link>
                            <p><a className="mailto" href="tel:+7 (916) 908-22-10">+7 (916) 908-22-10</a></p>
                            <p><a className="mailto" href="mailto:79169082210@mail.ru">79169082210@mail.ru</a></p>
                        </div>
                    </div>
                </div>
         </div>

    )
}