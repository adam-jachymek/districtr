import * as React from "react";
import { Link } from "react-router-dom";
import "./style.sass"


const Regions = () => {
    const regions = JSON.parse(localStorage.getItem('data')) || [];

    return (
        <div className="wrapper">
            <Link to="new"><button>Add new region</button></Link>
            <h3>Regions list</h3>
            <ul>
                {regions.map((region) => 
                    <Link key={region.id} to={`/regions/${region.id}`}>
                        <li>
                            <strong>Name:</strong> <br/> {region.name}
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    )
}


export default Regions;