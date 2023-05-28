// import React, { useState } from 'react'

export default function About(props) {

    let myStyleBlack = {
        color: 'white',
        backgroundColor: '#153564'
    };

    let myStyleDefault = {
        color: '',
        backgroundColor: ''
    };

    // const [style, setStyle] = useState(myStyleDefault);
    // const [EDword, setEDword] = useState("Enable");

    // const EDDarkModClicked = () => {
    //    if (style.color === 'white')
    //    {
    //     setStyle(myStyleDefault);
    //     // setEDword("Enable");
    //    }
    //    else
    //    {
    //     setStyle(myStyleBlack);
    //     // setEDword("Disable");
    //    }
    // }

    return (
        <div className="container" style={props.mode === 'light' ? myStyleDefault : myStyleBlack}>
            <h2 className="my-3">About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.mode === 'light' ? myStyleDefault : myStyleBlack}>
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.mode === 'light' ? myStyleDefault : myStyleBlack}>
                            Textutilsss gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.mode === 'light' ? myStyleDefault : myStyleBlack}>
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.mode === 'light' ? myStyleDefault : myStyleBlack}>
                            TextUtilsss is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.mode === 'light' ? myStyleDefault : myStyleBlack}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.mode === 'light' ? myStyleDefault : myStyleBlack}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-3" onClick={EDDarkModClicked}>{EDword} dark mod</button> */}
        </div>
    )
}