import {action, computed, observable} from "mobx";
import Probitem from "./ProbItem";
import {geometryData, ProbabilityItem} from "../constants/interfaces";
import { combinations } from "../helpers/calcMath";

export class ProbList{
    @observable.shallow list: Probitem[] = [];

    constructor(probItems: ProbabilityItem[]){
        probItems.forEach(this.addProb);
    }

    @action
    addProb = (prob: ProbabilityItem) => {
        this.list.push(new Probitem(prob.X, prob.P));
    }



    @action
    removeProb = (index:number) => {
        this.list.splice(index, 1);
    }

    @action
    clearList = () => {
        this.list = []
    }

    @action
    createDataSequence = (data:geometryData) => {
        for(let i:number = data.m; i < data.n; i++) {
            this.addProb({X:i, P:(combinations(i, data.M) * combinations(data.n - i, data.N - data.M)) / combinations(data.n, data.N)
            })
        }
    }

    @computed
    get allProballities(): ProbabilityItem[] {
        let tempArr = this.list.sort((a, b) => a.getProbPair.X > b.getProbPair.X? 1:-1)
        return tempArr.map(elem => {
            return {X: elem.getProbPair.X, P: elem.getProbPair.P}
        });
    }

    @computed
    get checkDuplicates(): boolean {
        let tempArr = this.list.sort((a, b) => a.getProbPair.X > b.getProbPair.X? 1:-1)
        let isDuplicate:any =  tempArr.find((elem,index) => {
            return tempArr.length - 1 !== index && tempArr[index + 1].getProbPair.X === elem.getProbPair.X;
        });

        return Boolean(isDuplicate)
    }

    @computed
    get allX(): number[] {
        return this.list.map(elem => {
            return elem.getProbPair.X
        });
    }

    @computed
    get allP(): number[] {
        return this.list.map(elem => {
            return elem.getProbPair.P
        });
    }

    @computed
    get allXForFunc():number[]{
        let result:number[] = []

        result.push((this.list[0].getProbPair.X - 3))
        result.push(...this.list.map(elem => elem.getProbPair.X))
        return result
    }

    @computed
    get allPForFunc():number[]{
        let result:number[] = []

        result.push((this.list[0].getProbPair.X - 3))
        result.push(...this.list.map(elem => elem.getProbPair.X))
        return result
    }
}
