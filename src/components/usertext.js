import {React, useState} from 'react'

function Usertext () {

    const [text, setText] = useState("Input Text");

    const change = event => {
        setText(event.target.value)
    }

    return (
        <input onChange={change} value={text}/>
    );
}

export default Usertext