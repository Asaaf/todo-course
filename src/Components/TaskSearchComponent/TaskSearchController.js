import React from 'react';
import './TaskSearchView';
import { TaskSearchView } from './TaskSearchView';

function TaskSearchController({ searchValue, setSearchValue }) {

    const detectChanges = (change) => {
        setSearchValue(change.target.value);
    };

    return (
        <TaskSearchView detectChanges={detectChanges} searchValue={searchValue}></TaskSearchView>
    );
}

export { TaskSearchController };