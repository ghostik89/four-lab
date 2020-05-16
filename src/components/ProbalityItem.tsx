import {InputNumber, Space, Typography} from "antd";
import React, {useState} from "react";
import {ProbabilityItem} from "../constants/interfaces";

interface ProbalityItemComponentProps {
    index: number,
    updateArray: Function,

}
export const ProbalityItemComponent = () => {
    const [pItem, setPItem] = useState<ProbabilityItem>({X: 0, P: 0});
    const {Text} = Typography;
    const xChange = (value:any) =>{
        setPItem({...pItem, X:value})
    }

    const pChange = (value:any) =>{
        setPItem({...pItem, P:value})
    }

    return(
        <div>
            <Space>
                <Text>Координата X:</Text>
                <InputNumber value={pItem.X} onChange={xChange}/>
                <Text>Вероятность:</Text>
                <InputNumber value={pItem.P} onChange={pChange}/>
            </Space>
        </div>
    )
}