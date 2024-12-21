import { useState } from "react";

`use strict`;
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App()
{
  const [step,updateStep] = useState(1);
  const [isOpen , setIsOpen] = useState(true);
  // const [test,setTest] = useState({name:"John"});

  const handleNext = function()
  {
  
    if(step < 3)
      {
        updateStep(step => step + 1);  
      };
  }

  const handlePrevious = ()=>
  {
    if(step > 1)
    {
      updateStep(step => step - 1);
    }
  }

  function isClose()
  {
    setIsOpen(isOpen => !isOpen);
  }
  return (
    <>
      <button className="close" onClick={ isClose }>&times;</button>
      { isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? 'active' : ""}>1</div>
              <div className={step >= 2 ? 'active' : ""}>2</div>
              <div className={step >= 3 ? 'active' : ""}>3</div>
            </div>

            <p className="message">Step: {messages[step - 1] }</p>
            <div className="buttons">
              <button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={ handlePrevious }>Previous</button>
              <button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick = { handleNext }>Next</button>
            </div>
          </div>
      )
        }
    </>
  );
}
