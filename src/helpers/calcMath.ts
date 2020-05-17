import {ProbabilityItem} from "../constants/interfaces";

export function calcMathWait (arrProbalities:Array<ProbabilityItem>):number {
    function reducer (accumulator:number, currentValue:ProbabilityItem):number{
        return accumulator + currentValue.X * currentValue.P
    }
    return arrProbalities.reduce(reducer, 0);
}

function calcMathWaitsqr(arrProbalities:Array<ProbabilityItem>):number {
    function reducer (accumulator:number, currentValue:ProbabilityItem):number{
        return accumulator + currentValue.X * currentValue.X * currentValue.P
    }
    return arrProbalities.reduce(reducer, 0);
}

export function calcMathDispertion(arrProbalities:Array<ProbabilityItem>):number{
    return calcMathWaitsqr(arrProbalities) - calcMathWait(arrProbalities)*calcMathWait(arrProbalities);
}

