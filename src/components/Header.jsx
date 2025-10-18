function Header(){

return(

<header className="bg-white">

<div className="text-2xl font-bold p-4 text-black flex flex-row w-full"> React for Designers</div>

<nav>

    <ul>
        <li className="text-green-200">Home</li>
        <li>Components</li>
        <li>Resources</li>
    </ul>
</nav>



    </header>



);








}

export default Header;
// export default is useful because no matter what you name the component, it will always export the header as the default export, 
// so if you make mistake in importing with wrong name this will import the header component