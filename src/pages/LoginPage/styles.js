import styled from 'styled-components';


const Container = styled.div`
    background-color: var(--main-color);
    font-family: var(--font-family);
    color: var(--font-color);
    font-size: 14px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    gap: 16px;

    @media(max-width: 300px) {

            Img, Input, Button{
            width: 80%;
        }
    }

`
const Title = styled.h1`
    font-family: var(--font-title);
`
const Input = styled.input``
const Button = styled.button``

export { Container, Title, Input, Button };
