import React from "react";
import data from "../../../../data.json";

export default function Moon() {
    return (
        <div>
            <div>
                <h1>{data.destinations[0].name}</h1>
                <p>{data.destinations[0].description}</p>
            </div>
            <div>
                <div>
                    <p>AVG. DISTANCE</p>
                    <p>384,400 km</p>
                </div>
                <div>
                    <p>Est. travel time</p>
                    <p>3 days</p>
                </div>
            </div>
        </div>
    )
}