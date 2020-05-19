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
                <Link key="1" to={firstExInputPath}>
                    <Button>Лаборатоная работа №4</Button>
                </Link>]}
        />
    )
}
