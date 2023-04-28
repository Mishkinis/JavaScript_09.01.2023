import { createContext } from "react";
import API from "./API";
import Reload from "./Reload";

export const Context = createContext();
export function Cont({ children }) {

    const [list] = API();
    const [reload, doReload] = Reload();

    return (
        <Context.Provider value={{ list, reload, doReload }}>
            {children}
        </Context.Provider>
    )
}