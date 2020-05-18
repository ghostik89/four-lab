import React from "react";
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../helpers/use-store";
import {Card, Divider, Table, Typography, Row, Col, Button} from "antd";
import {Line, Scatter} from 'react-chartjs-2';
import './firstexinput.css'
import {calcMathDispertion, calcMathWait, createDataFunc, normalizeCondition} from "../../helpers/calcMath";
import {OutFuncRas} from "../../components/MicroVisualComponents";
import {Link} from "react-router-dom";
import {firstExInputPath} from "../../constants/paths";


export const FirstExResult = () => {
    const probList = useStore()
    const mnData = {
        labels: probList.allX,
        datasets: [
            {
                label: 'Многоугольник распределения',
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
                data: probList.allP
            }
        ]
    };
    const data = {
        labels: [
            "Scatter"
        ],
            datasets: [
            {
                label: "Функция распределения",
                fill: false,
                showLine: true,
                lineTension: 0.1,
                borderColor: 'rgb(93,192,75)',
                backgroundColor: "#FFF",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#FFF",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "rgb(93,192,75)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: createDataFunc(probList.allProballities),
            }
        ]
    };
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
                <Text>{`Σpi = ${normalizeCondition(probList.allProballities)}`}</Text>
                {normalizeCondition(probList.allProballities) !== 1?
                <div>
                    <Text>Условие нормировки не выполнено! Введите другие значения!</Text>
                    <Link to={firstExInputPath}>
                        <Button type={"link"}>Исправить значения</Button>
                    </Link>
                </div>:''}
                {probList.checkDuplicates?
                    <div>
                        <Text>Обнаружены дупликаты координат!</Text>
                        <Link to={firstExInputPath}>
                            <Button type={"link"}>Исправить значения</Button>
                        </Link>
                    </div>:''}
            </Card>
            {normalizeCondition(probList.allProballities) === 1 || probList.checkDuplicates?
                <>
                    <Row>
                        <Col span={8}>
                            <Card title={"Функция распределения"} className={"firstExResult_card"}>
                                <Text>F(x) = </Text>
                                <OutFuncRas arrayOfNums={probList.allProballities}/>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title={"Математическое ожидание"} className={"firstExResult_card"}>
                                <Text>{`M(x) = Σpi * xi = ${calcMathWait(probList.allProballities).toFixed(4)}`}</Text>
                            </Card>
                        </Col>
                        <Col span={7} className={"firstExResult_card"}>
                            <Card title={"Дисперсия"}>
                                <Text>{`D(x) = M(X^2) - M(X)^2 = ${calcMathDispertion(probList.allProballities).toFixed(4)}`}</Text>
                            </Card>
                        </Col>
                    </Row>
                    <Card title={"Функция распределения"} className={"firstExResult_card_graph"}>
                        <Scatter data={data} height={100}/>
                    </Card>
                    <Card title={"Многоугольник распределения"} className={"firstExResult_card_graph"}>
                        <Line  data={mnData} height={100}/>
                    </Card>
                </>:''}
        </div>
    ))
}