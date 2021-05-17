import React from 'react'
import store, {ReduxStoreType} from "./redux/redux-store";

export const StoreContext = React.createContext(null) as any;

export type ProviderType = {
    store: ReduxStoreType,
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}