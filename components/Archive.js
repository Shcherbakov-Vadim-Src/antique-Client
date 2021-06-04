import React, { useState, useEffect } from "react";



export default function Archive() {

    const [goods, setGoods] = useState([]);

    const [month, setMonth] = useState('январь');


    useEffect(() => {
        fetch('http://localhost:3025/api/goods/').then(res => res.json()).then((data) => {  
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

        fetch(`http://localhost:3025/api/goods/archive?month=${stringMonth}`).then(res => res.json()).then((data) => {  
            setGoods(data);
        })
   
    }

    const handleClick = () => {
        window.location.reload();
    }


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
                    <button className="buttonSelect" name="button" type="submit">Сортировка по месяцам</button>
                </form>
                <button className="start" onClick={handleClick}>Вывести весь список</button>
                </div>
            <hr />
            <div className="archivePageConteiner">
                {goods
                    .filter((good) => {
                        return good.dateOfSale
                    })
                    .map(({ _id, title, price, about, photo, dateOfPlacement, dateOfSale }) => {
                        return <div key={_id} className="archiveMiniConteiner">
                            <h2 className="titleOfArchive">{title}</h2>
                            <img className="photoGoodArchive" src={photo} alt="photo goods" />
                            <p className="paragraphOfGoodArchive">{about}</p>
                            <p className="priceGoodArchive">Цена: {price} руб.</p>
                            <p className="dateOfGoodArchive">Дата размещения: {dateOfPlacement}</p>
                            <p className="dateSaleArchive">Дата продажи: {dateOfSale}</p>
                        </div>
                    })
                }
            </div>
            <div className="analitycsConteiner">
                <p className="checkSummOfSales">За {month} было совершено продаж на сумму {checkSale()} руб.</p>
                <div className="checkSummBox">
                    <p className="checkSummOfSalesSub">выбрать месяц:</p> 
                    <input className="checkSummInput" onChange={handleMonth} type="number" placeholder="6" />
                </div>
            </div>
        </>
    )

}