import React from 'react'
import store, {ReduxStoreType, RootReduxStateType} from "./redux/redux-store";

export const StoreContext = React.createContext(null) as any ;

export type ProviderType={
    store:RootReduxStateType,
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider >
}