import Button from "./Button";
import Badge from "./Badge";


function ConceptCard(props) 

{
  return (
    <div className="bg-white w-[400px] p-8 text-black rounded-md flex flex-col gap-12">
      <i className="ri-admin-line text-2xl text-red-500"></i>

      <div 
      className="items-start flex flex-col gap-4">
       <Badge
       text="Introduction"
       variant="positive"
       iconBefore="ri-check-line"/>
           
        <h1 className="text-2xl font-semibold">{props.title}</h1>
        <p>
          Browse all available icons at the Remix Icons website (remixicon.com)
          to find appropriate icons for different React concepts
        </p>
        <Button text="Card Click" 
        className="bg-green-600 hover:bg-green-900 rounded-md px-4 py-2 text-white"/>
      </div>
    </div>
  );
}

export default ConceptCard;
