//Accordion component in react
import { useState } from "react";

function Accordion() {
  const [isopen, setIsopen] = useState(false);

  function updater() {
    setIsopen((prev) => !prev);
  }

  return (
    <div className="bg-white text-black rounded-md  p-4">
      <div
        className="bg-gray-100 p-4 rounded-md hover:bg-gray-300 cursor-pointer flex flex-row gap-4 items-center"
        onClick={updater}
      >
        <h1 className="text-xl font-semibold w-full">This is the heading</h1>


        {
isopen?(<i className="ri-arrow-down-s-line bg-white py-2 px-3 rounded-md"></i>):(<i className="ri-arrow-up-s-line  bg-white py-2 px-3 rounded-md"></i>)}

      </div>

{isopen && 

      <div className="bg-gray-100 rounded-md p-4">
        <p>
          Browse all available icons at the Remix Icons website (remixicon.com)
          to find appropriate icons for different React concepts
        </p>
      </div>
}
      
    </div>
  );
}

export default Accordion;
