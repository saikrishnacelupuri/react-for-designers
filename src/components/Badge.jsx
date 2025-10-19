function Badge({ variant, text, iconBefore, iconAfter }) {
  function getVariantStyles() {
    if (variant === "positive") {
      return "bg-green-500 text-white";
    } else if (variant === "negative") {
      return "bg-red-500 text-white";
    } else {
      return "bg-gray-300 text-black";
    }
  }

  return (
    <div className="bg-white flex flex-row gap-4 rounded-md justify-center items-center py-4">
      <div className={`${getVariantStyles()} text-black rounded-full flex gap-2 p-2 px-4`}>
        
        {iconBefore && <i className={iconBefore}></i>}
        {text}
        {iconAfter && <i className={iconAfter}></i>}
      </div>
    </div>
  );
}

export default Badge;
