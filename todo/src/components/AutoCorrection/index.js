import { useState } from "react";
import axios from 'axios'
import "./styles.css"

const AutoCorrection = () => {
    const [word, setWord] = useState("");
    const [corrections, setCorrections] = useState([]);
    const onChange = async (event) => {
        const inputWord = event.target.value;
        setWord(inputWord);
        try {
            if (inputWord.trim() === "") {
                setCorrections([])
            } else {
                await axios.post("http://localhost:8080/spell", { word: word }).then((res) => setCorrections(res.data))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onSearch = (word) => {
        setWord(word)
        setCorrections([])
    }
    return (
        <div className="suggestion-box">
            <h1>Auto Correction Suggestion</h1>
            <div className="box-inner">
                <input type="text" placeholder="check" value={word} onChange={e => onChange(e)} className="suggestion-input" />
                {word && (<div className="dropdown"><ul >
                    {corrections.map((v, i) => <li key={i} onClick={() => onSearch(v)} >{v}</li>)}
                </ul></div>)}
            </div>
        </div>
    )
}
export default AutoCorrection;