

import { useState } from "react";

function CounterCart(){


// declaring a state and creating a variable count and setCount is the function given to us by the useState react hook to modify that constant.
   const [count, setCount] = useState(0);

// Adding a new state to control the steps

const [step, setStep] = useState(5);
/*  
⏺  Create step state: Add const [step, setStep] = useState(1) below
  your count state - this will store how much to add/subtract each
  click
  
  Use step in inc/dec: Change setCount(count + 1) to setCount(count
   + step) and setCount(count - 1) to setCount(count - step) - now
  add buttons or input to change step value using setStep()
*/


   function dec(){
    setCount(count-step)
   }

   function inc(){
    setCount(count+step)
   }

   function res(){
    setCount(0)
    setStep(0)
   }




return(

    
<div className="bg-white text-black flex flex-row gap-4 rounded-md justify-center items-center py-4 my-4 border border-1 border-gray-200">
<p onClick={dec} className="bg-red-100 p-4 rounded-md text-red-800 cursor-pointer">Decrease</p>


<p>{count}</p>


<p onClick={inc}
className="bg-green-100 p-4 rounded-md text-green-800 cursor-pointer"
>Increase</p>


<p onClick={res}
className="bg-gray-100 p-4 rounded-md text-gray-800 cursor-pointer"
>Reset</p>


<div className="flex flex-col gap-2">
<label>

    Enter the step amount
</label>
<input  
type="number" 
className="border border-gray-200 p-4 bg-white rounded-md text-gray-800"
value={step}
onChange ={(e)=>setStep(Number(e.target.value))}


/>

</div>



</div>



)



}

export default CounterCart;

