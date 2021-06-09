import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function News() {

    return (
        <div className="newsPageConteiner">
            <div className="newsMiniConteiner">
                <img className="newsPictures" src="http://antikclub.ru/_nw/67/96160248.jpg" />
                <div className="newsMiniBox">
                    <h3 className="newsHeader">ПЛАНИРУЕТСЯ РЕКОНСТРУКЦИЯ НЕВСКОЙ БИТВЫ</h3>
                    <p className="newsParagraph">Комитет по молодежной политике и взаимодействию с общественными организациями объявило конкурс по организации и проведению военно-исторического фестиваля «Невская битва». Максимально исполнителям готовы заплатить 5,8 млн рублей. От подрядчика требуется провести двухдневный фестиваль.
    В рамках фестиваля должны пройти торжественное открытие с приветственными словами официальных лиц, парад участников с расшитой, выполненной по историческим источникам хоругвью Святого благоверного князя Александра Невского, военно-историческая реконструкция, конно-рыцарский турнир, пешие состязания русской дружины и европейских рыцарей, пеший турнир воинов XIII века в номинациях 1 на 1 и 3 на 3.
    Также в рамках мероприятия пройдет ярмарка народно-художественных промыслов.</p>
                    <a className="newsAnchor" href="http://antikclub.ru/news/na_rekonstrukciju_nevskoj_bitvy_vydelili_5_8_mln_rublej/2021-05-29-6768">Читайте подробнее в источнике.</a>
                </div>
            </div>
            <div className="newsMiniConteiner">
                <img className="newsPictures" src="https://www.dvaveka.ru/wa-data/public/blog/img/foto-1418.jpg" />
                <div className="newsMiniBox">
                    <h3 className="newsHeader">МОДА НА СОВЕТСКУЮ ФОТОАППАРАТУРУ</h3>
                    <p className="newsParagraph">Легендарная советская фотоаппаратура. В настоящее время представлен довольно большой выбор фотоаппаратуры, которая имеет широкие функциональные возможностями, а многие модели отличаются компактными размерами. И сложно даже представить, что первые фотоаппараты выглядели совсем иначе и имели внушительные размеры. В Советском Союзе выпускалось не так много фотоаппаратов. Особое место среди них занимал деревянный фотоаппарат ФК. Эта модель фотоаппаратов выпускалась сразу в нескольких вариантах. Поэтому у советского человека был определенный выбор. Они могли подобрать технику в зависимости от формата кадра.</p>
                    <a className="newsAnchor" href="https://www.dvaveka.ru/blog/legendarnaya-sovetskaya-fotoapparatura/">Читайте подробнее в источнике.</a>
                </div>
            </div>
            <div className="newsMiniConteiner">
                <img className="newsPictures" src="https://www.dvaveka.ru/wa-data/public/blog/img/c70cd688796f749f64545944290324b56aa1f8e5b635cf8273ff5b5cdb6b7550.jpg" />
                <div className="newsMiniBox">
                    <h3 className="newsHeader">НОВОСТИ СТАРЫХ КАССОВЫХ АППАРАТОВ</h3>
                    <p className="newsParagraph">Старинные кассовые аппараты пользуются большой популярностью среди западных коллекционеров. Изобрел это устройство в 1879-м году владелец салуна из Дейтона, штат Огайо, Джеймс Ритти. Цель изобретения заключалась не в том, чтобы упростить вычисления, а сделать так, чтобы недобросовестные служащие не могли красть деньги.Хотя Ритти разработал несколько различных моделей, именно «Неподкупная касса» имела наибольший успех. Устройство было оснащено металлическими метчиками, показывающие сумму продажи при нажатии; сумматором, который суммировал все нажатия клавиш за рабочий день и колокольчиком, который звонил во время каждой продажи.
В 1884-м году бизнесмен Джон Паттерсон организовал «Национальную производственную компанию» и купил патенты у Джймса Ритти на сборку кассовых аппаратов.</p>
                    <a className="newsAnchor" href="https://www.dvaveka.ru/blog/kollektsionirovanie-starinnykh-kassovykh-apparatov/">Читайте подробнее в источнике.</a>
                </div>
            </div>
            <div className="newsMiniConteiner">
                <img className="newsPictures" src="https://www.dvaveka.ru/wa-data/public/blog/img/98415048.jpg" />
                <div className="newsMiniBox">
                    <h3 className="newsHeader">ВИНИЛ ДЕРЕВЕНСКОГО КОЛЛЕКЦИОНЕРА</h3>
                    <p className="newsParagraph">Тысячи виниловых пластинок деревенского коллекционера. В маленькой горной деревушке Бобин на среднем северном побережье Нового Южного Уэльса в Австралии неожиданно нашлась коллекция из 25 тысяч виниловых пластинок. Владелец этой уникальной коллекции Марк О'Брайен собирает пластинки более полувека. «Первую пластинку я купил, когда мне было всего восемь лет. Я просто покупал пластинки, которые мне нравились, и слушал их на своем проигрывателе, который подарили родители. Лет двадцать назад я понял, что являюсь не просто меломаном, а коллекционером. Однажды я прибирался в доме, выносил на свалку старый хлам и вдруг понял, что для пластинок требуется отдельная комната, на тот момент их у меня было около 17 тысяч».</p>
                    <a className="newsAnchor" href="https://www.dvaveka.ru/blog/tysyachi-vinilovykh-plastinok-derevenskogo-kollektsionera/">Читайте подробнее в источнике.</a>
                </div>
            </div>
        </div>
    )

}