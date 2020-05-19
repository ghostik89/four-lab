import React from "react";
import {Button, Collapse, Divider, Tooltip, Typography, Row, Col} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "./firstexinput.css"
import {ProbalityItemComponent} from "../../components/ProbalityItem";
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../helpers/use-store";
import {Link} from "react-router-dom";
import { firstExInputPath} from "../../constants/paths";
import {normalizeCondition} from "../../helpers/calcMath";

export const FirstExInput = () => {
    const { Title, Text } = Typography;
    const {Panel} = Collapse
    const probList = useStore();
    const addProbality = () => {
        probList.addProb({X:0, P:0})
    }

    return useObserver ( () => (
        <div className={"containerStyle"}>
           <Title>Введите данные для рассчета</Title>
           <Divider/>
               <Collapse defaultActiveKey={['1']} >
                   <Panel header={"Задание 1"} key={'1'}>
                       <Row gutter={[8, 8]} align="middle">
                           <Col>
                               <Text>Введите количество экспериментов</Text>
                           </Col>
                           <Col>
                               <Tooltip title="Добавить эксперимент">
                                   <Button type="primary" shape="circle" icon={<PlusOutlined/>} onClick={addProbality}/>
                               </Tooltip>
                           </Col>
                       </Row>
                       <Divider/>
                       {probList.list.map((elem, index) => (
                           <ProbalityItemComponent
                               probItem={elem}
                               myStyle={"constainerProbalities_item"}
                               deleteProb={() => {
                                   probList.removeProb(index)
                               }}
                           />
                       ))}
                       {normalizeCondition(probList.allProballities) !== 1?
                       <div>
                           <Text>{`Условие нормировки не выполнено! До его выполнения осталось ${1 - normalizeCondition(probList.allProballities)}`}</Text>
                       </div>:
                           <Link to={firstExInputPath}>
                               <Button type={"link"}>Рассчитать значения</Button>
                           </Link>}
                   </Panel>
                   <Panel key={'2'} header={"Задание 2"}>

                   </Panel>
               </Collapse>
       </div>
       ))
}