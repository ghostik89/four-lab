import React from "react";
import {ProbabilityItem} from "../constants/interfaces";
import {Typography} from "antd";
import {calcRespFunc} from "../helpers/calcMath";

interface outFuncRas{
    arrayOfNums: Array<ProbabilityItem>
}

export const OutFuncRas = ({arrayOfNums}:outFuncRas) => {
    const {Paragraph} = Typography
    let arrayOfResults:Array<number> = calcRespFunc(arrayOfNums);

    return(
        <div>
            {arrayOfResults.map((elem, index) => (
                <div key={elem}>
                {index === 0? <Paragraph>{`0, при x≤${arrayOfNums[index].X}`}</Paragraph>:''}
                {index > 0 && index !== arrayOfResults.length - 1? <Paragraph>{`${elem}, ${arrayOfNums[index - 1].X} < x ≤ ${arrayOfNums[index].X}`}</Paragraph>:''}
                {index === arrayOfResults.length - 1? <Paragraph>{`1, при x > ${arrayOfNums[index].X}`}</Paragraph>:''}
                </div>
            ))}
        </div>
    )
}