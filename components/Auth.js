import React, { useState, useEffect } from "react";
import { Form, Input, Button } from 'antd';

export default function Auth() {
    const submit = (values) => {
        fetch('http://localhost:3025/token', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            localStorage.setItem('antiqueToken', data.token);
            window.location.href = '/goods';
        })
    }

    return (
        <div className="loginConteiner">
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={submit}
            >
                <Form.Item
                    label="Логин"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Введите логин',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}