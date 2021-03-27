import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import List from './List';
import './css/style.css';


const Application = () => {
    const [response,getResponse] = useState([]);

    function handleResponse(response){
        getResponse(response);
    }

    return (
        <>
            <div className="title">
                <h1>Search Wikipedia</h1>
            </div>
            <SearchBar getresult={handleResponse} />
            <div className="list-view">
                <List  response={response} />
            </div>
        </>
    )
}

export default Application;