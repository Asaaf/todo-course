import './App.css';
import React from 'react';
import { AppView } from './AppView';

const taskListDefault = [
    { id: 1, name: "Formatear PC", description: "Descripción de la tarea número 01", status: "unfilled" },
    { id: 2, name: "Tarea 02", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus nulla, placerat non nibh ut, gravida hendrerit quam. Sed congue interdum tortor, at euismod orci scelerisque vitae. Donec ut velit velit. Suspendisse metus nibh, volutpat ultricies lectus nec, porttitor tristique nisi. Sed suscipit leo molestie magna suscipit ornare. Ut vehicula gravida sapien, non consectetur velit condimentum eget. Fusce elementum a ex ut facilisis. Proin tincidunt sem quis dolor fringilla dictum. Nulla placerat placerat ante lacinia bibendum. Pellentesque efficitur fermentum ante, id imperdiet dolor tincidunt sed. Praesent maximus suscipit maximus. Aliquam at blandit urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum at vulputate massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae sapien dui. Nam mauris justo, suscipit hendrerit luctus quis, ultrices quis justo. Suspendisse dignissim neque massa, facilisis eleifend libero feugiat a. Morbi ac imperdiet elit. Nunc id lorem ornare, malesuada felis quis, cursus leo. Aliquam molestie massa quis laoreet congue. Ut pretium maximus pretium. In sodales arcu eget nunc ullamcorper feugiat. Ut id tincidunt nulla, sit amet varius nulla.", status: "unfilled" },
    { id: 3, name: "Tarea 03", description: "Descripción de la tarea número 03", status: "unfilled" },
    { id: 4, name: "Tarea 04", description: "Descripción de la tarea número 04", status: "unfilled" },
    { id: 5, name: "Tarea 05", description: "Descripción de la tarea número 05", status: "unfilled" },
    { id: 6, name: "Tarea 06", description: "Descripción de la tarea número 06", status: "unfilled" },
]

function AppController() {
    const [taskList, setTask] = React.useState(taskListDefault);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTask = taskList.filter(task => (task.status === 'completed')).length;
    const results = taskList.filter(task => task.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    const totalTask = taskList.length;

    return (
        <AppView searchValue={searchValue} setSearchValue={setSearchValue} completedTask={completedTask} totalTask={totalTask} taskList={results} setTask={setTask} />
    );
}

export default AppController;
