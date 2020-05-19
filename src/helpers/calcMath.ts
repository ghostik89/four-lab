import {geometryData, Point, ProbabilityItem} from "../constants/interfaces";

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

export function normalizeCondition(arrProbalities:Array<ProbabilityItem>):number {
    function reducer (accumulator:number, currentValue:ProbabilityItem):number{
        return accumulator +  currentValue.P
    }
    return arrProbalities.reduce(reducer,0)
}

export function calcRespFunc(arrProbalities:Array<ProbabilityItem>):Array<number> {
   let result:Array<number> = []
    function reducer (accumulator:number, currentValue:ProbabilityItem):number{
        return accumulator + currentValue.P
    }
    for(let i:number = 0; i < arrProbalities.length; i++){
        console.log(arrProbalities.slice(0, i+1).reduce(reducer,0))
        result.push(arrProbalities.slice(0, i+1).reduce(reducer,0))
    }

    return result;
}

export function createDataFunc(arrProbalities:Array<ProbabilityItem>):Point[] {
    let funcResp:number[] = calcRespFunc(arrProbalities)
    let result:Point[] = [];
    result.push({x:arrProbalities[0].X - 3,y:0})
    funcResp.forEach((elem, index) =>{
        if(index === 0){
            result.push({x: arrProbalities[index].X, y:0})
            if (arrProbalities.length > 1)
                result.push({x: arrProbalities[index+1].X, y:0})
        }
        else if(index === arrProbalities.length-1) {
            result.push({x: arrProbalities[index].X, y: 1})
            result.push({x: arrProbalities[index].X + 3, y: 1})
        }
        else {
            result.push({x: arrProbalities[index].X, y:elem})
            result.push({x: arrProbalities[index+1].X, y:elem})
        }
    })

    if (arrProbalities.length === 1){
        result.push({x: arrProbalities[0].X, y: 1})
        result.push({x: arrProbalities[0].X + 3, y: 1})
    }

    return result
}

function factorial(n:number):number {
    if(n === 0)
        return  1
    let result = n
    for(let i:number = n - 1; i > 0; i++)
        result *= i
    return  result
}

export function combinations(n:number, k:number):number {return (factorial(n))/(factorial(n-k)*factorial(k))}


export function dataSequence(data:geometryData):ProbabilityItem[] {
    let result:ProbabilityItem[] = []

    for(let i:number = data.m; i < data.n; i++) {
        result.push({X:i, P:(combinations(i, data.M) * combinations(data.n - i, data.N - data.M)) / combinations(data.n, data.N)
    })
    }
    return result
}