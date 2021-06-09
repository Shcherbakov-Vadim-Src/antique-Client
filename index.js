import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style.css";
import 'antd/dist/antd.css';

import { LockOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import Goods from './components/Goods';
import Contacts from './components/Contacts';
import News from './components/News';
import Archive from "./components/Archive";
import Good from './components/Good';
import EditGood from './components/EditGood';
import AddGood from './components/AddGood';
import Client from './components/Client';
import ClientGood from './components/ClientGood';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

    let token = localStorage.getItem('antiqueToken');

    const handleResetLogin = () => {
        fetch(`http://localhost:3025/logout?token=${token}`, {
            method: 'DELETE'
        }).then((up) => {
            console.log(up);
            window.localStorage.removeItem('antiqueToken');
            window.location.href = '/';
        })
    }

    const authClickHandler = () => {
        window.location.href = '/auth';
    }

    const clickHomePage = () => {
        window.location.href = '/';
    }

    console.log('app');

    return (<BrowserRouter>
        <div className="main">
            <header>
                <h1 onClick={clickHomePage} className="main-title">Antique</h1>
                <div className="linksConteiner">
                    <Link className="links" to={token ? "/goods" : '/'}>
                    Каталог
                    </Link>
                    <Link className="links" to="/news">
                    Новости
                    </Link>
                    {token ? <Link className="links" to="/archive">
                    Архив
                    </Link> : null}
                    <Link className="links" to="/contacts">
                    Контакты
                    </Link>
                </div>
                <div className="candleBox">
                    {!token ? <Button onClick={authClickHandler} icon={<LockOutlined />}></Button> : <Button onClick={handleResetLogin} icon={<LogoutOutlined />}></Button>}
                </div>
            </header>
            {/* <hr /> */}
            <Route path="/" exact component={Client} />
            <Route path="/auth" exact component={Auth} />
            <ProtectedRoute path="/goods" exact component={Goods} />
            <ProtectedRoute path="/goods/:id" exact component={Good} />
            <Route path="/client/goods/:id" exact component={ClientGood} />
            <ProtectedRoute path="/goods/edit/:id" exact component={EditGood} />
            <ProtectedRoute path="/goods/add" exact component={AddGood} />
            <Route path="/news" exact component={News} />
            <ProtectedRoute path="/archive" exact component={Archive} />
            <Route path="/contacts" exact component={Contacts} />
        </div>
    </BrowserRouter>
    )
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);