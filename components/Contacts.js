import React, { useState, useEffect } from "react";


export default function Contacts() {

    // let map = <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A73bf29da15b84e639e3263b8c8fcbdcd736518971c082240a3bfcbbfb44ccc04&amp;width=536&amp;height=405&amp;lang=ru_RU&amp;scroll=true"></script>

    const getQuestions = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];
        const dataObj = {
            name: data[0],
            mail: data[1],
            phone: data[2],
            question: data[3]
        }
        console.log(data);
        console.log('dataObj---->', dataObj);
        event.target.reset();
    }

    return (
        <div className="thirdPageConteiner">
            <div className="contactConteinerMini">
                <div className="yandexMap"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A73bf29da15b84e639e3263b8c8fcbdcd736518971c082240a3bfcbbfb44ccc04&amp;source=constructor" width="536" height="405" frameborder="0"></iframe></div>
                    <form className="contactForm" onSubmit={getQuestions}>
                        <p className="firstParagraphNews" name="first" >Я на связи.</p>
                        <p className="secondParagraphNews" name="second">Оставьте Вашу заявку и я перезвоню.</p>
                        <div className="questionData">
                            <div className="questionData1">
                                <input className="inputNameNews" name="name" type="text" placeholder="Ваше имя" />
                                <input className="inputPostNews" name="post" type="text" placeholder="Ваша почта" />
                                <input className="inputPhoneNews" name="phone" type="text" placeholder="Номер телефона" />
                            </div>
                            <div className="questionData2">
                                <textarea className="questionArea" type="text" name="question" placeholder="Опишите Ваш вопрос "></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inputButtonNews" name="button">ОТПРАВИТЬ</button>
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