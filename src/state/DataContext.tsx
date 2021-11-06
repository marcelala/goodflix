// dependencies
import { createContext, ReactNode, useContext, useReducer } from "react";
import iMedia from "../interfaces/iMedia";
import DataReducer from "./DataReducer";

//interface
interface iProps {
    children: ReactNode;
}
interface iContext {
    dispatch: Function;
    data: iMedia[];
}
// properties
const initialState: iMedia[] = [];
const DataContext = createContext<iContext>({
    dispatch: () => console.warn("context used outside the provider"),
    data: initialState,
});

export function DataProvider({ children }: iProps) {
    // Local state
    const [data, dispatch] = useReducer(DataReducer, initialState);

    return (
        <DataContext.Provider value={{ dispatch, data: data }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
