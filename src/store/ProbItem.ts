import { observable, action, computed } from "mobx";
import {ProbabilityItem} from "../constants/interfaces";


export default class ProbItem{
    id = Date.now();

    @observable probPair: ProbabilityItem = {X: 0, P: 0};

    constructor(X:number, P:number){
        this.probPair = {X: X, P: P};
    }

    @action
    editPropPair = (X: number, P:number) =>{
        this.probPair = {X: X, P: P};
    }

    @computed
    get getProbPair():ProbabilityItem {
        return this.probPair;
    }
}