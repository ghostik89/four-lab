import React from "react";
import {Button, Divider, Space, Tooltip,  Typography} from 'antd';
import { PlusOutlined, CalculatorOutlined } from '@ant-design/icons';
import "./firstexinput.css"
import {ProbalityItemComponent} from "../../components/ProbalityItem";
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../helpers/use-store";
import {Link} from "react-router-dom";
import {firstExCalcPath} from "../../constants/paths";

export const FirstExInput = () => {
    const { Title, Text } = Typography;
    const probList = useStore();

    const addProbality = () => {
        probList.addProb({X:0, P:0})
    }

    return useObserver ( () => (
        <div className={"containerStyle"}>
           <Title>Введите данные для рассчета</Title>
           <Divider/>
           <Space>
               <Text>Введите количество экспериментов</Text>
               <Tooltip title="Добавить эксперимент">
                   <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={addProbality}/>
               </Tooltip>
               <Tooltip title="Рассчитать значения">
                   <Link to={firstExCalcPath}>
                       <Button type="primary" shape="circle" icon={<CalculatorOutlined />}/>
                   </Link>
                </Tooltip>
           </Space>
            {probList.list.map((elem, index) => (
                <ProbalityItemComponent
                    probItem={elem}
                    myStyle={"constainerProbalities_item"}
                    deleteProb={() => {probList.removeProb(index)}}
                />
            ))}
       </div>
       ))
}