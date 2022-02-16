import * as React from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";
import "./style.sass"


const Region = () => {
    const {id} = useParams();
    const regions = JSON.parse(localStorage.getItem('data')) || [];
    const region = regions.find(item => item.id === id);

    if (region) {
    return (
        <div className="wrapper">
            <p><strong>Name:</strong> {region.name}</p>
            <p><strong>Description:</strong> {region.description}</p>
        
        <Map cor={region.cor}/>
        </div>
        
    )
}

}


export default Region