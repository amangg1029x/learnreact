import { useContext } from "react";
import { DataContext } from "./userConext";

function Card(props) {

    const data = useContext(DataContext);

    return (
        <div className="Info rounded-3xl bg-green-300 static w-60 border border-green-600 my-15 mx-5 place inline-block ">
            <p>Mai hoon {data}</p>
            <img className="img1 justify-self-center p-5" src={props.img}></img>
            <h2 className="justify-self-center">{props.name}</h2>
            <p className="justify-self-center p-2">{props.role}</p>
        </div>
    );
}


export default Card