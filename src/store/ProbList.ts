import {action, computed, observable} from "mobx";
import Probitem from "./ProbItem";
import {ProbabilityItem} from "../constants/interfaces";

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

    @computed
    get allProballities(): ProbabilityItem[] {
        return this.list.map(elem => {
            return {X: elem.getProbPair.X, P: elem.getProbPair.P}
        });
    }
}