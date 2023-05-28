import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnClickUpper = () => {
        if (text !== "") {
            let upperText = text.toUpperCase()
            setText(upperText)
            //console.log(text)
            props.showAlert("Converted to uppercase!", "success");
        }
    }

    const handleOnClickLower = () => {
        if (text !== "") {
            let lowerText = text.toLowerCase()
            setText(lowerText)
            //console.log(text)
            props.showAlert("Converted to lowercase!", "success");
        }
    }

    const handleOnClickClear = () => {
        if (text !== "") {
            setText("")
            //console.log(text)
            setWordCount(0)
            setCharCount(0)
            props.showAlert("Text cleared!", "success");
        }
    }

    const handleRemoveExtra = () => {
        if (text !== "") {
            let myNewText = text.split(/[ ]+/); //regex
            setText(myNewText.join(" "))
            //console.log(text)
            setWordCount(myNewText.filter(i => i !== '').length)
            setCharCount(myNewText.join(" ").length)
            props.showAlert("Extra spaces are removed!", "success");
        }
    }

    const handleOnChange = (event) => {
        let myNewText = event.target.value
        setText(myNewText)
        setWordCount(myNewText.split(/[ ]+/).filter(i => i !== '').length)
        setCharCount(myNewText.length)
        //console.log(charCount)
    }

    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    return (
        <div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="mb-3">
                    <h1>{props.text}</h1>
                    <textarea className="form-control" value={text} style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleOnClickUpper} >Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleOnClickLower} >Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleOnClickClear} >Clear text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtra} >Remove extra spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? '#0c60da' : 'white' }}>
                <h2>Your text summary</h2>
                <p><b>{wordCount}</b> words and <b>{charCount}</b> characters</p>
                <p><b>{0.008 * wordCount}</b> minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}