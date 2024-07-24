import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
       // console.log("Button is clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick = () =>{
        let newTexts = text.toLowerCase()
        setText(newTexts)

    }
    const handleClearClick = () =>{
        let newTexts = " " ;
        setText(newTexts)

    }
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

    }


    const handleOnChange = (event)=> {
       // console.log("handle on change")
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    //text = "new text"; wrong way to change the state
    //setText("new text");  //correct way to change the state
    return (
        <>
        <div className='container'  style={{color:props.mode=== 'dark' ? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                {/*two curly braces because it is an object */}
                <textarea className="form-control" style={{backgroundColor :props.mode=== 'dark' ? 'grey': 'white',color:props.mode=== 'dark' ? 'white': 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
        </div>
        <div className="container my-3" style={{color:props.mode=== 'dark' ? 'white': 'dark'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} charecter</p>
            <p>{text.split(" ").length * 0.008} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text :"Enter something to preview"}</p>
        </div>
        </>
    )
}
