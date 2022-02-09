import React, { createContext, useReducer } from 'react';
import AccountReducer from './AccountReducer';

const initialAccountState = {
    transactions: []
}

export const AccountContext = createContext(initialAccountState)


export const AccountProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AccountReducer, initialAccountState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    };

    return (<AccountContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </AccountContext.Provider>);
};
