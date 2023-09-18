import data from "../../../../data.json";
const Description = ({ selecTech }) => {
    return (
        <div>
            {data.technology.map((tech) => (
                <div key={tech.name}>
                    <div >
                        <h1 className=" uppercase font-Bellefair text-terciary text-center font-normal text-2xl">{selecTech === tech.name.replace(" ", "") ? tech.name : ""}</h1>
                    </div>
                    <div >
                        <p className=" font-Barlow text-secundary text-center  ml-8 mr-8">{selecTech === tech.name.replace(" ", "") ? tech.description : ""}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Description;
