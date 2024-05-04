import React , {useState} from 'react';

export default function TextForm ( props ) {

    const handleUpClick = () =>{
        // console.log('Upper Case button is clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log('On Change');
        setText(event.target.value);
    }

    const [text , setText] = useState("Enter your text here");

    return (
            <div>
                <h1>{ props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
            </div>
    )
}