import React, { useState } from "react";

// e is used in run() and form submission. This is used to catch the event. preventDefault prevents the page to refresh.

const Form = () => {
    
    const [name, setName] = useState("Aman");

    const run = (e) => {
        e.preventDefault()
        console.log(name);
        return (
            <div>
                <h1> Let Me Laugh</h1>
            </div>
        );
    }

    return (
        <div className="form1 flex justify-self-center p-10">
            <form onSubmit={(e)=>{run(e)}}>
                <div className="p-2">
                
                    <input onChange={(e) => {setName(e.target.value); console.log(name)}} type="text" className="inp1 p-2 border bg-red-200 rounded-2xl" placeholder="Name"/>
                </div>
                <div className="p-2">
                    <input type="number" placeholder="Age" className="inp2 p-2 border rounded-2xl bg-red-200"/>
                </div>
                <div className="flex justify-center">
                <button className="px-4 py-3 rounded-4xl border-1 border-black text-green-600">Submit</button>
                </div>
            </form>
        </div>
    );

}

export default Form