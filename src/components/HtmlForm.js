import React, { useState } from 'react'


export default function HtmlForm(properties) {
    const textChange = (e) => {
        setText(e.target.value);
    }
    const textUpper = () => {
        let CapText = text.toUpperCase();
        setText(CapText);
    }

    const [text, setText] = useState('')
    const [myStyle, setMyStyle] = useState(
        {
            color: "black",
            backgroundColor: "white"
        }
    )
    const changeMode = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            });
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
        }
    }
    return (
        <>
            <div style={myStyle}>
                <h1>{properties.heading}</h1>
                <div>
                    <textarea rows={10} id="my-box" value={text} style={myStyle} onChange={textChange} className='my-box-class form-control'></textarea>
                    <button className="btn btn-primary my-2" onClick={textUpper}>Check</button>
                    <p className='my-2'>{text.length} Characters and {text.split(" ").length - 1} Words</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                    <button className="btn btn-primary" onClick={changeMode}>Change Color</button>
                </div>
            </div>
        </>
    )
}
