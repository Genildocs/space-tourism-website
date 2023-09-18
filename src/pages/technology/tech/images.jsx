import data from "../../../../data.json";
import Launch from "../../../../public/assets/technology/image-launch-vehicle-landscape.jpg"
import Spaceport from "../../../../public/assets/technology/image-spaceport-landscape.jpg"
import SpaceCapsule from "../../../../public/assets/technology/image-space-capsule-landscape.jpg"
const Images = ({selecTech}) =>{

    return(
        <div className="mb-6">
            <div>
                <img src={Launch} alt="LAUNCH VEHICLE"
                className={`${selecTech === "Launchvehicle" ? 'block' : 'hidden' }`} />
            </div>

            <div>
                <img src={Spaceport} alt="SPACEPORT"
                className={`${selecTech === "Spaceport" ? 'block' : 'hidden' }`} />
            </div>

            <div >
                <img src={SpaceCapsule} alt="SPACE CAPSULE"
                className={`${selecTech === "Spacecapsule" ? 'block' : 'hidden' }`} />
            </div>
        </div>
        
    )

}

export default Images;