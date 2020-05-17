import {ProbList} from '../store/ProbList'
import { useContext } from "react";
import { StoreContext } from "./store-provider";

export const useStore = (): ProbList => useContext(StoreContext);