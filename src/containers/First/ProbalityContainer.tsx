import React from "react";
import {ProbabilityItem} from "../../constants/interfaces";
import {ProbalityItemComponent} from "../../components/ProbalityItem";

interface ProbalityContainerProps {
    array:Array<ProbabilityItem>
}

export const ProbalityContainer = ({array}:ProbalityContainerProps) => {
    return(
        <>
            {array.map(((elem, index) => (
                <ProbalityItemComponent key={elem.P}/>
            )))}
        </>
    )
}