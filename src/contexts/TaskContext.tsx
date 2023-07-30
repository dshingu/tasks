import TaskApi from '../api/TaskApi';
import {AuthContext} from '../contexts/AuthContext';
import React, {createContext} from 'react';

export const TaskContext = React.createContext({});

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const {token} = React.useContext(AuthContext);
    const [fetching, setFetching] = React.useState(false);
    const [pill, setPill] = React.useState({
        msg: '',
        callback: () => {
        }
    })
    const [task, setTask] = React.useState({
        title: '',
        description: '',
        due_at: new Date,
    });

    const setData = (property, value) => {
        switch (property) {
            case 'title': 
                setTask((prevState) => {
                    return {...prevState, title: value};
                });
            break;
            case 'description': 
                setTask((prevState) => {
                    return {...prevState, description: value};
                });
            break;
            case 'due_at': 
                setTask((prevState) => {
                    return {...prevState, due_at: value};
                });
            break;
            default: 
            break;
            console.log(task);
        }
    };
    
    const toggleDateTimePicker = (props) => {

        setShow(!show);

    }

    const saveTask = async () => {
        try {
            const _tasks = [...tasks];
            const response = await TaskApi.post('/v1/tasks', task);
            _tasks.unshift(response.data);
            setTasks(_tasks);
        } catch (e) {
            console.log(e.response);
        }
    }

    const fetchTasks = async () => {
        setFetching(true);
        try {
            const response = await TaskApi.get('/v1/tasks');
            setTasks(response.data);
        } catch (e) {
            console.log(e);
        }
        setFetching(false);
    };

    const deleteTask = async (id: string) => {
    
        try {

            const _tasks = [...tasks];
            const response = await TaskApi.delete('/v1/tasks', {data: {id: id}});
            setTask(response.data);
            const index = _tasks.findIndex((t) => t._id === id);
            _tasks.splice(index, 1);
            setTasks(_tasks);

            setPill({
                msg: 'Task deleted.',
                callback: async () => {
                    saveTask();
                }
            })
            console.log(response.data);

        } catch (e) {
            console.log(e);
        }
    }

    React.useEffect(() => {

        (async() => {
            await fetchTasks();
        })();

    }, [token]);

    return (
        <TaskContext.Provider value={{fetching, tasks, task, setData, toggleDateTimePicker, saveTask, showModal, deleteTask, pill, setPill}}>
            {children}
        </TaskContext.Provider>
    );
}