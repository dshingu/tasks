import React, {createContext} from 'react';

export const TaskContext = React.createContext({});

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = React.useState([]);

    return (
        <TaskContext.Provider value={{tasks}}>
            {children}
        </TaskContext.Provider>
    );
}