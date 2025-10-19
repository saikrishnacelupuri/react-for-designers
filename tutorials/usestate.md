tutorial : https://www.youtube.com/watch?v=O6P86uwfdR0

//use state hook

// Always import hooks before using.

// You can only use the hooks in function components. cannot use in class components. 

// your hooks must execute in the order they declared. 
// You cannot put a hook inside a condition like "if" - they must be called in the same order they are declared. - must be at the top level of the function. 

// structure of usestate: 


useState is a Function. 
	•	1️⃣ useState() returns an array with two elements →
	•	The first item is the current state value (can be a number, string, object, array — anything!).
	•	The second item is a function that lets you update that value.



Which will return an array of values which has 2 values.
1st value is state
2nd value is a function which will allow us to update the state



const [count, setCount] = useState(0)
// this is called array destructuring, directly assigning the values from one array to another like this : 

const colors = ["red", "blue"];
const [firstColor, secondColor] = colors;

in this example we are directly putting 1st array contents into 2nd one. 



