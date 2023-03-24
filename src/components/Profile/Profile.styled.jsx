import styled from 'styled-components';

export const ProfileStyled = styled.div`
width:500px;
margin: 0 auto;
border:1px solid black;
border-radius:5px;
background-color:yellow;
`;

export const Description = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
`;

export const Avatar = styled.img`
    width: 50%;
    border-radius: 50%;
    background-color: #FFFFFF;
`;

const Paragraph = styled.p`
    font-size:24px;
    color: #1c1c1c;
    font-family: cursive;
`; // as template

export const Name = styled(Paragraph)`
font-size: 2em;
    font-weight: 700;
`;

export const Tag = styled(Paragraph)``;

export const Location = styled(Paragraph)``;

export const Stats = styled.ul`
display: flex;
    flex-direction: row;
    padding:0;
    margin:0;
`;

export const StatsItem = styled.li`
    width:33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border:1px solid #00FFFF;
`;

export const Label = styled.span`
font-size:24px;
    color: #1c1c1c;
    font-family: cursive;
`;

export const Quantity = styled.span`
font-size:30px;
    color: #1c1c1c;
    font-family: cursive;
    font-weight: 700;
`;
