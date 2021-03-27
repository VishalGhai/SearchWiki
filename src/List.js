import React, { useState, useEffect } from 'react';

const List = (props) => {
    const [results,setResults] = useState([]);
    
    useEffect(() => {
        setResults(results => props.response);
    },[props.response])


    return results.map((item)=>{
        return (
            <div className="card">
                <a target="_blank" href={"https://en.wikipedia.org?curid="+item.pageid}><h2>{item.title}</h2></a>
                <p dangerouslySetInnerHTML={{__html:item.snippet}}></p>
            </div>
        )
    })
}

export default List;