import axios from "axios";
import React from "react";


var response;

const Api = () => {

    const getData = async () => {
        response = await axios.get('https://picsum.photos/seed/picsum/200/300');
        console.log(response.data);
    }

    return (

        <div>
            <button onClick={getData} className="border m-10 rounded-3xl p-1 flex justify-self-center bg-gradient-to-r from-red-500 to-yellow-400 active:scale-90">Get Data</button>
            <img src={response}></img>
        </div>

    );

}

export default Api;