import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';

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
                <div className="yandexMap"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A73bf29da15b84e639e3263b8c8fcbdcd736518971c082240a3bfcbbfb44ccc04&amp;source=constructor" width="536" height="405" frameborder="0"></iframe></div>
                    <form className="contactForm" onSubmit={getQuestions}>
                        {/* <p className="firstParagraphNews" name="to_name" >Я на связи.</p> */}
                        <p className="secondParagraphNews" name="second">Оставьте Вашу заявку и я перезвоню.</p>
                        <div className="questionData">
                            <div className="questionData1">
                                {/* <input className="inputNameNews" name="from_name" id="from_name" type="text" placeholder="Ваше имя" />
                                <input className="inputPostNews" type="email" name="user_email" placeholder="Ваша почта" />
                                <input className="inputPhoneNews" name="to_name" id="to_name" type="text" placeholder="Номер телефона" /> */}
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
                            {/* <button type="submit" className="inputButtonNews" name="button">ОТПРАВИТЬ</button> */}
                            <Button className="inputButtonNe" htmlType="submit">Отправить</Button>
                    </form>
                    <div class="mapBox">
                        <h2 className="contactsTitle" >Мои контакты</h2>
                        <p><a className="mailto" href="tel:+7 (916) 908-22-10">+7 (916) 908-22-10</a></p>
                        <p><a className="mailto" href="mailto:79169082210@mail.ru">79169082210@mail.ru</a></p>
                    </div>
                </div>
         </div>

    )
}