import React from 'react';
import './TaskSearchView.css';

function TaskSearchView({detectChanges, searchValue}) {

    return (
        <div className='search-container'>
            <div className='title-section'>
                <h1>Lista</h1>
                <span>De tareas</span>
            </div>
            <div className='search-section'>
                <input type="text" name='search' id='search' className='search' placeholder='Buscar...' onChange={detectChanges} value={searchValue} />
                <button className='btn-search'>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </div>
        </div>
    );
}

export { TaskSearchView };