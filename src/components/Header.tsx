import React from "react";
import { PageHeader, Button } from 'antd';

export const MyPageHeader = () => {
    return (
        <PageHeader
            ghost={false}
            title="Лабораторная работа №4"
            extra={[
                <Button key="2">Задание 1</Button>,
                <Button key="1">Задание 2</Button>,
            ]}
        />
    )
}
