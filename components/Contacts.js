import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function Contacts() {

    let map = <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A73bf29da15b84e639e3263b8c8fcbdcd736518971c082240a3bfcbbfb44ccc04&amp;width=536&amp;height=405&amp;lang=ru_RU&amp;scroll=true"></script>

    return (
        <div className="thirdPageConteiner">
            <div className="contactConteinerMini">
                {/* <img className="contactsPictures" src="http://s1.1zoom.me/b5244/720/Roses_Blonde_girl_White_background_Beautiful_529670_1920x1080.jpg" alt="contacts img" /> */}
                <p>типа логотип</p>
                <p></p>
                <div class="map-box">
			        <h2>Наши контакты</h2>
                    <p>г. Москва, Тверская 7</p>
                    <p><a href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</a></p>
                    <p><a href="mailto:info@site.com">info@site.com</a></p>
                    <div className="yandexMap"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A73bf29da15b84e639e3263b8c8fcbdcd736518971c082240a3bfcbbfb44ccc04&amp;source=constructor" width="536" height="405" frameborder="0"></iframe></div>
                </div>
            </div>
        
        </div>
    )

}