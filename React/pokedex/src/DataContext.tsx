import { createContext } from "react";

import type {Pokemon} from "./types";

interface DataConctext{
    pokemon:Pokemon[]
}

export const DataContext = createContext<DataConctext>({pokemon:[]});