import React, {useEffect, useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm'
import Events from './Events'
import reducer from '../reducers/index'
import AppContext from "../contexts/AppContext";
import OperationLogs from "../components/operationLogs";


const App = () => {
    const initialState = {
        events: [],
        operationLogs: []
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className="container-fluid">
                <EventForm/>
                <Events/>
                <OperationLogs />
            </div>
        </AppContext.Provider>
    );
}

export default App;
