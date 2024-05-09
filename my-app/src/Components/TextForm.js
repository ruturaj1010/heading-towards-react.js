import React, { useState } from 'react';

export default function TextForm ( props ) {

    const handleUpClick = () => {
        // console.log('Upper Case button is clicked ' + text);
        let newText = text.toUpperCase();
        setText( newText );
        props.showAlert("Converted to uppercase!" , "success");
    }

    const handleLoClick = () => {
        // console.log('Upper Case button is clicked ' + text);
        let newText = text.toLowerCase();
        setText( newText );
        props.showAlert("Converted to Lowercase!" , "success");
    }

    const handleOnChange = ( event ) => {
        // console.log('On Change');
        setText( event.target.value );
    }

    const handleSpacing = () => {
        let newText = text.split( /[ ]+/ );
        setText( newText.join( " " ) );
        props.showAlert("Extra spaces Removed!" , "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText( text )
        props.showAlert("Text copied to clipboard!" , "success");
    }

    const handleClear = () => {
        let newText = ""
        setText( newText );
        props.showAlert("Cleared!" , "success");
    }

    const handleWordCount = () => {
        if ( text.trim() === "" ) {
            return 0;
        }

        return text.trim().split( " " ).length
    }

    const [text, setText] = useState( "" );

    return (
        <>
            <div className='container' style={ { color: props.mode === 'light' ? 'grey' : 'white' } }>
                <h1>{ props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={ text } style={ { backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' } } onChange={ handleOnChange } id="Mybox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={ handleUpClick } >Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={ handleLoClick } >Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={ handleSpacing } >Extra spaces removal</button>
                <button className="btn btn-primary mx-2" onClick={ handleCopy } >Copy to clipboard</button>
                <button className="btn btn-primary mx-2" onClick={ handleClear } >Clear text</button>
            </div>

            <div className="container my-3" style={ { color: props.mode === 'light' ? 'grey' : 'white' } }>
                <h2>Your text summary</h2>
                <p>{ handleWordCount() } words and { text.length } characters</p>
                <p>{ 0.008 * text.split( " " ).length } Minutes to read characters.</p>
                <h2>Preview</h2>
                <p>{ text.length > 0 ? text : "Enter your text to preview it here" }</p>
            </div>
        </>
    )
}