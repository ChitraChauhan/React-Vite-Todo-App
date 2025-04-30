const TODO_KEY = 'REACT_TODO';
export const getLocalStorageItems = () => {
    const tasks = localStorage.getItem(TODO_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

export const setLocalStorageItems = (tasks) => {
    localStorage.setItem(TODO_KEY, JSON.stringify(tasks));
}
