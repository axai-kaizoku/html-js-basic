import React, { useState } from "react";
import Typo from "typo-js";
import "./Search.css";
import data from "../../public/USER.json";

// Define the spell-checker
var dictionary = new Typo("en_US", {
    dictionaryPath: "/dictionaries",
  });
// 
// Interface for user data 


const Suggestions = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (inputValue) => {
        setValue(inputValue);

        // Get suggestions for misspelled words
        const misspelledWords = dictionary.suggest(inputValue);

        setSuggestions(misspelledWords);
    };

    const handleSuggestionClick = (suggestion) => {
        setValue(suggestion);
        setSuggestions([]);
    };

    const onSearch = (name) => {
        setValue(name);
    };

    return (
        <div className="m-8 text-center">
            {JSON.stringify(value)}
            {JSON.stringify(suggestions)}
            <h1 className="text-4xl font-bold">Search</h1>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search Functionality"
                    value={value}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <div >{suggestions.length > 0 && (
                    <div className="suggestions">
                        <ul>
                            {suggestions.map((suggestion, index) => (
                                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}</div>
                {/* <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.name.toLowerCase();
                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.name)}
                                className="dropdown-row"
                                key={item._id}
                            >
                                {item.name}
                            </div>
                        ))}
                </div> */}
            </div>
        </div>
    );
};

export default Suggestions;
