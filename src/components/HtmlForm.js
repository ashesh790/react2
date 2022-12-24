import React, { useState } from 'react'


export default function HtmlForm(properties) {
    const textChange = (e) => {
        setText(e.target.value);
    }
    const textUpper = () => {
        let CapText = text.toUpperCase();
        setText(CapText);
    }
    const [text, setText] = useState('Initial Value')
    return (
        <>
            <h1>{properties.heading}</h1>
            <div>
                <textarea rows={10} id="my-box" value={text} onChange={textChange} className='my-box-class form-control'></textarea>
                <button className="btn btn-primary my-2" onClick={textUpper}>Check</button>
                <p className='my-2'>{text.length}-{text.split(" ").length - 1}</p>
            </div>
        </>
    )
}
