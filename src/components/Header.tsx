import React from "react";
import { PageHeader, Button } from 'antd';
import { Link } from "react-router-dom";
import {firstExInputPath} from "../constants/paths";

export const MyPageHeader = () => {
    return (
        <PageHeader
            ghost={false}
            title="Лабораторная работа №4"
            extra={[
                <Link key="2" to={firstExInputPath}>
                    <Button>Задание 1</Button>
                </Link>,
                <Button key="1">Задание 2</Button>,
            ]}
        />
    )
}
