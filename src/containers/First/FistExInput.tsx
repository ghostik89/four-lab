import React, {useEffect, useState} from "react";
import {Button, Divider, Space, Tooltip,  Typography} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "./firstexinput.css"
import {ProbabilityItem} from "../../constants/interfaces";
import {ProbalityItemComponent} from "../../components/ProbalityItem";
import {ProbalityContainer} from "./ProbalityContainer";

export const FirstExInput = () => {
    const [arrayOfNums, setArrayOfNums] = useState<Array<ProbabilityItem>>([])
    const { Title, Paragraph, Text } = Typography;

    useEffect(()=>{},[arrayOfNums])
    const numChange = (value: ProbabilityItem, index:number) => {
        let tempArr = arrayOfNums;
        tempArr[index] = value
        setArrayOfNums(tempArr)
    }

    const deleteProbaliry = (index:number) =>{
        let tempArr = arrayOfNums
        tempArr = tempArr.splice(index, 1);
        setArrayOfNums(tempArr)
    }

    const addProbality = () =>{
        let tempArr = arrayOfNums
        tempArr.push({X: 0, P: 0})
        console.log(tempArr)
        setArrayOfNums(tempArr)
    }


    return(
       <div className={"containerStyle"}>
           <Title>Введите данные для рассчета</Title>
           <Divider/>
           <Space>
               <Text>Введите количество экспериментов</Text>
               <Tooltip title="Добавить эксперимент">
                   <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={addProbality}/>
               </Tooltip>
           </Space>
           <ProbalityContainer array={arrayOfNums}/>
       </div>
    )
}