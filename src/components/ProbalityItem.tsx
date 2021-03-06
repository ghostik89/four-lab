import {Button, InputNumber, Tooltip, Typography, Row, Col} from "antd";
import React, {useState} from "react";
import {ProbabilityItem} from "../constants/interfaces";
import ProbItem from "../store/ProbItem";
import { CheckOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface ProbalityItemComponentProps {
    probItem: ProbItem,
    myStyle: string,
    deleteProb: Function
}
export const ProbalityItemComponent = ({probItem, myStyle, deleteProb}: ProbalityItemComponentProps) => {
    const [pItem, setPItem] = useState<ProbabilityItem>({X: probItem.getProbPair.X, P: probItem.getProbPair.P});
    const [editable, setEditable] = useState<boolean>(true)
    const {Text} = Typography;
    const xChange = (value:any) =>{
        setPItem({...pItem, X:value})
    }

    const pChange = (value:any) =>{
        setPItem({...pItem, P:value})
    }

    const saveProbality = () => {
        setEditable(false)
        probItem.editPropPair(pItem.X, pItem.P)
    }

    return(
        <div className={myStyle}>
            <Row gutter={[8, 8]} align="middle">
                <Col>
                    <Text>Координата X:</Text>
                </Col>
                <Col>
                    <InputNumber value={pItem.X} onChange={xChange} disabled={!editable}/>
                </Col>
                <Col>
                    <Text>Вероятность:</Text>
                </Col>
                <Col>
                    <InputNumber max={1} min={0} value={pItem.P} step={0.1} onChange={pChange} disabled={!editable}/>
                </Col>
                {editable ? <Col><Tooltip title="Сохранить">
                        <Button type="primary" onClick={saveProbality} shape="circle" icon={<CheckOutlined/>}/>
                    </Tooltip></Col>
                    : <><Col>
                        <Tooltip title="Редактировать">
                            <Button type="primary" onClick={() => setEditable(true)} shape="circle"
                                    icon={<EditOutlined/>}/>
                        </Tooltip>
                    </Col>
                        <Col>
                            <Tooltip title="Удалить">
                                <Button type="primary" onClick={() => deleteProb()} danger shape="circle"
                                        icon={<DeleteOutlined/>}/>
                            </Tooltip>
                        </Col></>}
            </Row>
        </div>
    )
}