import React, { useState, useEffect } from "react";
import { Select, Button, Input, Image } from 'antd';
import { Link } from "react-router-dom";

const { Option } = Select;


export default function Archive() {

    const [goods, setGoods] = useState([]);

    const [month, setMonth] = useState('январь');


    useEffect(() => {
        fetch('https://antique-api.herokuapp.com/api/goods/').then(res => res.json()).then((data) => {  
            setGoods(data);
        })
    }, []);


    function checkSumm(arr, date1, date2){
        let checkMonth = [];
        let checkMonthSub = [];

        checkMonth = arr.filter((good) => {
            return good.dateOfSale > date1;
        });

        checkMonthSub = checkMonth.filter((good) => {
            return good.dateOfSale < date2;
        });
        
        let accounter = checkMonthSub.map((good) => {
            return good.price;
        })
        
        let summOfMonth = 0;

        for (let i = 0; i < accounter.length; i++) {
            summOfMonth += accounter[i];
        }
        
        return summOfMonth;
    }
    
    const handleMonth = (event) => {

        if (event.target.value === '1') {
            setMonth('январь');
        } else if (event.target.value === '2') {
            setMonth('февраль');
        } else if (event.target.value === '3') {
            setMonth('март');
        } else if (event.target.value === '4') {
            setMonth('апрель');
        } else if (event.target.value === '5') {
            setMonth('май');
        } else if (event.target.value === '6') {
            setMonth('июнь');
        } else if (event.target.value === '7') {
            setMonth('июль');
        } else if (event.target.value === '8') {
            setMonth('август');
        } else if (event.target.value === '9') {
            setMonth('сентябрь');
        } else if (event.target.value === '10') {
            setMonth('октябрь');
        } else if (event.target.value === '11') {
            setMonth('ноябрь');
        } else if (event.target.value === '12') {
            setMonth('декабрь');
        }

    }

    function checkSale() {
        if (month === 'январь') {
            return checkSumm(goods, '2021.01.01', '2021.02.01');
         } else if (month === 'февраль') {
            return checkSumm(goods, '2021.02.01', '2021.03.01');
          } else if (month === 'март') {
            return (checkSumm(goods, '2021.03.01', '2021.04.01'));
          } else if (month === 'апрель') {
            return (checkSumm(goods, '2021.04.01', '2021.05.01'));
          } else if (month === 'май') {
            return (checkSumm(goods, '2021.05.01', '2021.06.01'));
          } else if (month === 'июнь') {
            return (checkSumm(goods, '2021.06.01', '2021.07.01'));
          } else if (month === 'июль') {
            return (checkSumm(goods, '2021.07.01', '2021.08.01'));
          } else if (month === 'август') {
            return (checkSumm(goods, '2021.08.01', '2021.09.01'));
          } else if (month === 'сентябрь') {
            return (checkSumm(goods, '2021.09.01', '2021.10.01'));
          } else if (month === 'октябрь') {
            return (checkSumm(goods, '2021.10.01', '2021.11.01'));
          } else if (month === 'ноябрь') {
            return (checkSumm(goods, '2021.11.01', '2021.12.01'));
          } else if (month === 'декабрь') {
            return (checkSumm(goods, '2021.12.01', '2022.01.01'));
          } 
    }
    

    const handleSortSale = (event) => {
        
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.values()];
        let stringMonth = data.join('');

        fetch(`https://antique-api.herokuapp.com/api/goods/archive?month=${stringMonth}`).then(res => res.json()).then((data) => {  
            setGoods(data);
        })
   
    }

    const handleClick = () => {
        window.location.reload();
    }

    const divStyle = {
        width: '194px',
        height: '142px',
        borderRadius: '26px'
    };


    return (
        <>
            <div className="archiveHeader">
                <form onSubmit={handleSortSale}  className="formSelect">
                    <select className="select" name="select">
                        <option>январь</option>
                        <option>февраль</option>
                        <option>март</option>  
                        <option>апрель</option>
                        <option>май</option>
                        <option>июнь</option>
                        <option>июль</option>
                        <option>август</option>
                        <option>сентябрь</option>
                        <option>октябрь</option>
                        <option>ноябрь</option>
                        <option>декабрь</option>
                    </select>
                    <Button className="buttonSelect" name="button" htmlType="submit">Сортировка по месяцам</Button>
                </form>
                <div className="hrDiv">
                    <p className="hr">|</p>
                </div>
                <Button className="start" onClick={handleClick}>Вывести весь список</Button>
                </div>
            <div className="archivePageConteiner">
                {goods
                    .filter((good) => {
                        return good.dateOfSale
                    })
                    .map(({ _id, title, price, about, photo, dateOfPlacement, dateOfSale }) => {
                        return <div key={_id} className="archiveMiniConteiner">
                            <h2 className="titleOfArchive">{title}</h2>
                            <Image className="photoGoodArchive" style={divStyle} width={200} src={photo} alt="photo goods" />
                            <p className="priceGoodArchive">{price} руб.</p>
                            <p className="dateOfGoodArchive">Дата размещения: {dateOfPlacement}</p>
                            <p className="dateSaleArchive">Дата продажи: {dateOfSale}</p>
                        </div>
                    })
                }
            </div>
            <div className="analitycsConteiner">
                <Link className="checkSummOfSales">За {month} было совершено продаж на сумму {checkSale()} руб.</Link>
                <div className="checkSummBox">
                    <Link className="checkSummOfSalesSub">выбрать месяц:</Link>
                    <div className="checkSummInput">
                        <Input onChange={handleMonth} type="number" placeholder="6" />
                    </div>
                </div>
            </div>
        </>
    )

}