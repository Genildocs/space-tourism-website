import React from "react";
import data from "../../../../data.json";

export default function Moon() {
    return (
        <div className="text-center text-white p-5">                  
            <div >
                <h1 className="text-[3.5rem] uppercase mt-5 font-normal font-Bellefair">{data.destinations[0].name}</h1>
                <p className="text-[0.9rem] mb-5 font-normal font-Barlow text-secundary text-center leading-6">{data.destinations[0].description}</p>
            </div>
            <div className="sm:flex items-center justify-around">
                <div>
                    <p className=" text-secundary font-Barlow text-[0.9rem] uppercase tracking-[2.7px]">AVG. DISTANCE</p>
                    <p className="text-[1.75rem] font-Bellefair uppercase">{data.destinations[0].distance}</p>                    
                </div>
                <div>
                    <p className="mt-10 sm:mt-0 text-secundary font-Barlow text-[0.9rem] uppercase tracking-[2.7px]">Est. travel time</p>
                    <p className="text-[1.75rem] font-Bellefair uppercase">{data.destinations[0].travel}</p>                   
                </div>
            </div>
        </div>
    )
}