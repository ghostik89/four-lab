import { createContext } from "react";
import {ProbList} from '../store/ProbList'


export const StoreContext = createContext<ProbList>({} as ProbList);
export const StoreProvider = StoreContext.Provider;