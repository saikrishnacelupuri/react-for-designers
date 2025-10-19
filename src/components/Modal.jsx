import { useState } from "react";
import Button from "./Button";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function trigger() {
    setIsOpen(!isOpen);
  }


  return (
    <div className="w-full bg-white rounded-md p-4 flex justify-center">
      <Button
        text="Show Modal"
        className="bg-black text-white rounded-md px-4 py-2"
        onClick={trigger}
      ></Button>

      {isOpen && 
      
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

      
        <div className="w-[640px] mx-auto my-auto  bg-white rounded-md text-black overflow-hidden shadow-xl">
          <div className="bg-white border flex justify-between border-b border-gray-200 p-4">
            <h1>Modal headline</h1>

            <i className="ri-close-fill" onClick={trigger}></i>
          </div>

          <div className="bg-gray p-4 border boder-b border-gray-200">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishin
            </p>
          </div>

          <div className="bg-white p-4 flex flex-row gap-4 justify-end">
            <Button
              text="Cancel"
              className="bg-gray-300 px-4 py-2 rounded-md text-black"
              onClick={trigger}
            ></Button>
            <Button
              text="Proceed"
              className="bg-green-600 px-4 py-2 rounded-md text-white"
              onClick={trigger}
            ></Button>
          </div>
        </div>
      
      
      
      </div>
      }
    </div>
  );
}

export default Modal;
