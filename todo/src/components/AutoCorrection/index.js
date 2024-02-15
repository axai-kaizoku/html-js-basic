import { useState } from "react";
import axios from 'axios'
import "./styles.css"

const AutoCorrection = () => {
    
    // State declarations
    const [word, setWord] = useState("");
    const [corrections, setCorrections] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1)
    // Event Handlers
    const onChange = async (event) => {
        const inputWord = event.target.value;
        setWord(inputWord);
        try {
            if (inputWord.trim() === "") {
                setCorrections([])
            } else {
                await axios.post("http://localhost:8080/spell", { word: word }).then((res) => setCorrections(res.data))
                console.log(corrections)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onSearch = (word) => {
        setWord(word)
        setCorrections([])
    }

    const handleKeyDown = e => {
        if (e.key === "ArrowUp" && selectedItem > 0){
            setSelectedItem(prev => prev - 1)
        }else if (e.key === "ArrowDown" && selectedItem < corrections.length - 1){
            setSelectedItem(prev => prev + 1)
        }else if (e.key === "Enter" && selectedItem >= 0){
            setWord(corrections[selectedItem])
            setCorrections([])
        }
    }
    return (
        <div className="suggestion-box">
            <h1 className="heading">Auto Correction Suggestor</h1>
            <div className="box-inner">
                <input type="text" placeholder="check" value={word} onChange={e => onChange(e)} className="suggestion-input" onKeyDown={e => handleKeyDown(e)}/>
                {word && (<div className="dropdown"><ul >
                    {corrections.map((v, i) => <li key={i} onClick={() => onSearch(v)} className={selectedItem === i ? "active":""} >{v}</li>)}
                </ul></div>)}
            </div>
        </div>
    )
}
export default AutoCorrection;