function Header(){

return(

<header className="bg-white rounded-md flex justify-between p-4">

<div className="text-2xl font-bold p-4 items-center text-black "> React for Designers</div>

<nav className="flex flex-row items-center gap-4">

    <ul className="text-black flex flex-row gap-4">
        <li>Home</li>
        <li>Components</li>
        <li>Resources</li>
    </ul>

    <button 
    className="bg-gray-900 p-4 rounded-md text-white hover:bg-green-700"
    onClick={
()=>window.open("https://github.com/saikrishnacelupuri/react-for-designers", "_blank")

    }
    
    >View in github</button>
</nav>



    </header>



);








}

export default Header;
// export default is useful because no matter what you name the component, it will always export the header as the default export, 
// so if you make mistake in importing with wrong name this will import the header component