import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function Contacts() {

    let map = <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A73bf29da15b84e639e3263b8c8fcbdcd736518971c082240a3bfcbbfb44ccc04&amp;width=536&amp;height=405&amp;lang=ru_RU&amp;scroll=true"></script>

    const getQuestions = () => {

    }

    return (
        <div className="thirdPageConteiner">
            <div className="contactConteinerMini">
                {/* <img className="contactsPictures" src="http://s1.1zoom.me/b5244/720/Roses_Blonde_girl_White_background_Beautiful_529670_1920x1080.jpg" alt="contacts img" /> */}
                <div className="yandexMap"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A73bf29da15b84e639e3263b8c8fcbdcd736518971c082240a3bfcbbfb44ccc04&amp;source=constructor" width="536" height="405" frameborder="0"></iframe></div>
                    <form className="contactForm" onChange={getQuestions}>
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
                    <div class="map-box">
                        <h2>Наши контакты</h2>
                        <p>г. Москва, Тверская 7</p>
                        <p><a href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</a></p>
                        <p><a href="mailto:info@site.com">info@site.com</a></p>
                    </div>
                </div>
         </div>

    )
}