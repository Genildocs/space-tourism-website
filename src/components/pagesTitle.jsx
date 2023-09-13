import styled from "@emotion/styled";

const PagesTitle = ({number, title}) =>{

    return(
        <>
            <Title><span className="text-secundary font-bold">{number}</span>{title}</Title>
        </>
    )
}

export default PagesTitle;

const Title = styled.h1`
    color: #FFF;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin: 2rem 0;

`