import React, { useState, useEffect } from 'react';
import axios from 'axios';
const SearchBar = (props) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        let timer = null;
        if (value) {
            timer = setTimeout(async () => {
                const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: value
                    }
                });
                props.getresult(data.query.search);
            }, 1000);

        }
            return () => {
                clearTimeout(timer);
            }
    }, [value])

    return (
        <div className="searchcontainer">
            <div className="searchbar">
                <input placeholder="Search here..." onChange={(e) => setValue(e.target.value)} value={value} className="inputbar" type="text" />
            </div>
            <div className="searchbtn">
                <button className="btn">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;