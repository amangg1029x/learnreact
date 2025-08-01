import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card";



const Api = () => {

    const [Data, setData] = useState([]);

    const getData = async () => {

        const response = await axios.get('https://picsum.photos/v2/list');
        setData(response.data)
        console.log(Data);
        
    }

    useEffect (() => {
        getData();
    })

    return (
        
        <div>
            {
                Data.map(function(elem, idx) {
                    return <Card key = {idx} img = {elem.download_url} name = {elem.author}></Card>
                })
            }
        </div>

    );

}

export default Api;