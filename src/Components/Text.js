import React, {useState} from 'react'

export default function Text(props){
    
    const [Text, setText] = useState("Enter your text");


    const ChangeUpperCase = () =>{
        let newText = Text.toUpperCase()
        setText(newText)
        props.showAlert("Text changed to UpperCase", "Success");
    }


    const ChangeLowerCase = () =>{
        let newText = Text.toLowerCase()
        setText(newText)
        props.showAlert("Text changed to LowerCase", "Success");
    }



    const handleExtraSpaces = () =>{
        let newText = Text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "Success");
    }


    
    const clearData=(event)=>{
        console.log("Clear data function applied")
        setText("")
        props.showAlert("Text Cleared", "Success");
    }

    const copyData =()=>{
        navigator.clipboard.writeText(Text);
        props.showAlert("Text Copied", "Success");

    }

    
    const onChange=(event)=>{
        console.log("Onchange Applied")
        setText(event.target.value)
    }

   

    return(
        <>
            <div className= {`container text-${props.text}`} >
                <div className="mb-3">
        
                <label htmlFor="exampleFormControlTextarea1"   className="form-label my-4"> <h3> {props.title} </h3></label>
                <textarea  className={`form-control bg-${props.Mode} text-${props.text}`} id="exampleFormControlTextarea1 myBox"  value={Text} onChange={onChange} rows="8"></textarea>
                    <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2" onClick={ChangeUpperCase}>Convert to UpperCase</button>
                    <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2" onClick={ChangeLowerCase}>Convert to LowerCase</button>
                    <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2" onClick={clearData}>Clear Data</button>
                    <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2" onClick={copyData}>Copy Data</button>

                </div>

                <div className="1">
                    <h1>Your Text Summary</h1>
                        <p> <span className="time">{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</span> words and <span className="time">{Text.length}</span> characters</p>
                        <p>If you are a moderate reader then you will take <span className="time"> {0.008 * Text.split(" ").length} </span> minutes to read the above Statement of Input box </p>
            
            
                </div>

            </div>
        
        </>
    )
}