import { useState } from "react";

function ToggleSwitch(){


const [ isOn, setIsOn] = useState(false);


function toggler(){
    setIsOn((prev)=>!prev);
}


  return(

<div className="flex flex-row gap-2 mt-4 justify-center items-center bg-white text-black p-4 rounded-md">
    <h1 className={`${isOn?"font-normal":"font-bold"} cursor-pointer`} onClick={toggler}>OFF</h1>
    <div className={`w-16 px-2 py-2 rounded-full items-start cursor-pointer ${isOn? "bg-green-500 hover:bg-green-600":"bg-gray-200 hover:bg-gray-300"}`} onClick={toggler}>
    <div className={`bg-gray-900 w-4 px-2 h-4 rounded-full ${isOn?"translate-x-8":"translate-x-0"}`} ></div>
    </div>

    <h1 className={`${isOn?"font-bold":"font-normal"} cursor-pointer`} onClick={toggler}>ON</h1>
    </div>

)

}

export default ToggleSwitch;