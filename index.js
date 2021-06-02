import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style.css";
import Goods from './components/Goods';
import Contacts from './components/Contacts';
import News from './components/News';
import Archive from "./components/Archive";
import Good from './components/Good';
import EditGood from './components/EditGood';
import AddGood from './components/AddGood';

function App() {

    return (<BrowserRouter>
        <div className="main">
            <div className="linksConteiner">
                <Link className="links" to="/goods">
                Каталог
                </Link>
                <Link className="links" to="/news">
                Новости
                </Link>
                <Link className="links" to="/archive">
                Архив
                </Link>
                <Link className="links" to="/contacts">
                Контакты
                </Link>
            </div>
            <hr />
            <Route path="/goods" exact component={Goods} />
            <Route path="/goods/:id" exact component={Good} />
            <Route path="/goods/edit/:id" exact component={EditGood} />
            <Route path="/goods/add" exact component={AddGood} />
            <Route path="/news" exact component={News} />
            <Route path="/archive" exact component={Archive} />
            <Route path="/contacts" exact component={Contacts} />
        </div>
    </BrowserRouter>
    )
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);