import styled from 'styled-components';


export const Page = styled.section`
    z-index: 99999;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px){
        height: 100vh;

    }
`;


export const SeeMore = styled.a`
    background: var(--purple);
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 15px;
    transition: all .3s ease;


    :hover{
        background-color: var(--main-bg);
        text-decoration: none;
        color: #fff;
    }
`;

export const Quote = styled.div`
    border-left: 5px solid #120632;
    padding-left: 20px;
    text-align: justify;
`