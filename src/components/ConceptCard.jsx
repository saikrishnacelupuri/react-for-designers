import Button from "./Button";


function ConceptCard(props) 

{
  return (
    <div className="bg-white w-[400px] p-8 text-black rounded-md flex flex-col gap-12">
      <i class="ri-admin-line text-2xl text-red-500"></i>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{props.title}</h1>
        <p>
          Browse all available icons at the Remix Icons website (remixicon.com)
          to find appropriate icons for different React concepts
        </p>
        <Button text="Card Click"/>
      </div>
    </div>
  );
}

export default ConceptCard;
