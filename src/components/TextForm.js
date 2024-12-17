import React, { useState } from 'react';

export default function TextForm(props){
    const handleUpClick = ()=>{
             let newText = text.toUpperCase();
             setText(newText);
    }
    
    const handleLoClick = (event)=>{
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handleCopy = ()=>{
      let text = document.getElementById('mytext')
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleToClear = () =>{
      let newText = '';
      setText(newText)
    }
    const handleExtraspace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handlefirstwordupcase =() =>{
      // let newText = text.charAt(0).toUpperCase()+ text.slice(1);
      let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('enter text here');
  return (  
    <div>
      <h1>{props.Headers}</h1>
    <div className="mb-3">   
         <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows="3"></textarea>
   </div>
   <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
   <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
   <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
   <button className="btn btn-primary mx-1" onClick={handleExtraspace}>Remove Extra Space</button>
   <button className="btn btn-primary mx-1" onClick={handleToClear}>Clear</button>
   <button className="btn btn-primary" onClick={handlefirstwordupcase}>First Word UpperCase</button>
    </div>
  )
}
