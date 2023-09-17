import { motion } from "framer-motion";
import data from "../../../../data.json";

const Specialist = ({ selecSpecialist, setSelectSpecialist }) => {
    return (
        <div>
            <div className="text-white">
                {data.crew.map((people) => (
                    <div key={people.name} className="mt-8 text-center ml-[2rem] mr-[2rem]">
                        <div className="">
                            <h1 className="uppercase font-Bellefair opacity-50">
                                {selecSpecialist === people.role.replace(" ", "")
                                    ? people.role
                                    : ""}
                            </h1>
                        </div>

                        <div className="mb-[1rem]">
                            <h2 className=" uppercase font-Bellefair text-[1.5rem]">
                                {selecSpecialist === people.role.replace(" ", "")
                                    ? people.name
                                    : ""}
                            </h2>
                        </div>

                        <div>
                            <p className="text-secundary font-Barlow leading-[1.6rem]">
                                {selecSpecialist === people.role.replace(" ", "")
                                    ? people.bio
                                    : ""}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specialist;
