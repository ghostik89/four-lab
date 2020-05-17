import React from "react";
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../helpers/use-store";
import {Card, Divider, Table, Typography, Row, Col} from "antd";
import {Line} from 'react-chartjs-2';
import './firstexinput.css'
import {calcMathDispertion, calcMathWait} from "../../helpers/calcMath";


export const FirstExResult = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };
    const probList = useStore()
    const {Title, Text, Paragraph} = Typography;
    const columns = [{
            title:'X',
            dataIndex:'X',
            key: 'id'
        },{
            title:'P',
            dataIndex:'P',
            key: 'id'
        }]

    return useObserver(() =>(
        <div className={"containerStyle"}>
            <Title>Рассчет первого задания.</Title>
            <Divider/>
            <Card title={"Значения экспериментов"} className={"firstExResult_card"}>
                <Table dataSource={probList.allProballities} columns={columns}/>
                <Divider/>
                <Paragraph>Условие нормировки:</Paragraph>
                <Text>Σpi = 1</Text>
            </Card>
            <Row>
                <Col span={8}>
                    <Card title={"Функция распределения"} className={"firstExResult_card"}>
                        <Text>F(x) = </Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={"Математическое ожидание"} className={"firstExResult_card"}>
                        <Text>{`M(x) = Σpi * xi = ${calcMathWait(probList.allProballities)}`}</Text>
                    </Card>
                </Col>
                <Col span={7} className={"firstExResult_card"}>
                    <Card title={"Дисперсия"}>
                        <Text>{`D(x) = M(X^2) - M(X)^2 = ${calcMathDispertion(probList.allProballities)}`}</Text>
                    </Card>
                </Col>
            </Row>
            <Card title={"Дисперсия"} className={"firstExResult_card_graph"}>
                <Line data={data}/>
            </Card>
        </div>
    ))
}