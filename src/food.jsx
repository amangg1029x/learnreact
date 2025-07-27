import { useState } from "react";

function Food() {

    const [food1, setFood1] = useState("Orange");
    const [num, setNum] = useState(0);
    const food2 = "Apple";
    const food3 = "Mango";

    function change() {
        setFood1("Papaya");
        setNum(num+1);
        console.log(num);
    }

    return (
        <>
            <ul>
                <li>{food1.toUpperCase()}</li>
                <li>{num}</li>
                <li>{food2}</li>
                <li>{food3}</li>
            </ul>
            <button onClick={change}>Click Me</button>
            <hr></hr>
        </>

    );
}

export default Food