import React from 'react'

export default function About (props) {

    // const [myStyle, setMyStyle] = useState( {
    //     color: "black",
    //     backgroundColor: "white"
    // } )

    // const [BtnText, setBtnText] = useState( "Enable Dark Mode" )

    // const toggleStyle = () => {
    //     if ( myStyle.color === "white" ) {
    //         setMyStyle ( {
    //             color: "Black",
    //             backgroundColor: "White"
    //         } )
    //         // setBtnText( "Enable Dark Mode" )
    //     } else {
    //         setMyStyle ( {
    //             color: "white",
    //             backgroundColor: "black"
    //         } )
    //         // setBtnText( "Enable Light Mode" )
    //     }
    // }


    // New code
    let myStyle = {
        color : props.mode === "dark"? "white" : "black" ,
        backgroundColor : props.mode === "dark"? "#4f3a66" : "white"
    }

    return (
        <div className="container p-2">
            <h1 className='my-2'>About us</h1>
            <div className="accordion" style={ myStyle } id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={ myStyle } type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={ myStyle } data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={ myStyle } type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div style={ myStyle } id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={ myStyle } className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browseer Compatible</strong>
                        </button>
                    </h2>
                    <div style={ myStyle } id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <button onClick={ toggleStyle } style={ myStyle } type="button" className="btn btn-primary my-2">{ BtnText }</button>
            </div> */}

        </div>
    )
}
