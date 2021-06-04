import React, { useState, useEffect } from "react";


export default function Auth() {
        

    const changeSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];
        
        let loginKeys = { 
            login: data[0],
            password: data[1]
        }

        fetch('http://localhost:3025/token', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(loginKeys)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            localStorage.setItem('antiqueToken', data.token);
            window.location.href = '/goods';
        })
    }

    return (
        <div className="loginConteiner">
            <div>
                <form onSubmit={changeSubmit} className="loginForm" name="loginForm">
                    <input type="text" className="loginInput" placeholder="login" name="loginInput" />
                    <input type="text" className="passwordInput" placeholder="password" name="passwordInput" />
                    <button className="loginButton" name="loginButton" type="submit">Sigh in</button>
                </form>
            </div>
        </div>
    )
}