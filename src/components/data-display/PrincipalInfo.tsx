import React from 'react'
import styled from 'styled-components'

type PrincipalInfoProps = {
    subtitle: string
    paragraph: string
    button: string
}

const PrincipalInfo: React.FC<PrincipalInfoProps> = (props) => {
    return (
        <Container>
            <Subtitle>{props.subtitle}</Subtitle>
            <Paragraph>{props.paragraph}</Paragraph>
            <Button>{props.button}</Button>
            <Separator />
        </Container>
    )
}

export default PrincipalInfo

const Container = styled.div`
    padding: 2rem 1.7rem;
    text-align: center;

    @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 6rem;
        text-align: left;
    }
`

const Subtitle = styled.h2`
    font: 700 1.5rem 'Fraunces', serif;
    color: hsl(212, 27%, 19%);

    @media (min-width: 800px) {
        font-size: 2rem;
    }
`

const Paragraph = styled.p`
    color: hsl(212, 27%, 19%);
    font-size: 0.8rem;
    line-height: 20px;
    margin: 1.4rem 0;
`

const Button = styled.button`
    font: 700 0.8rem 'Fraunces', serif;
    color: hsl(212, 27%, 19%);
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;

    @media (min-width: 800px) {
        text-align: left;
        margin-left: 7px;
    }
`

const Separator = styled.hr`
    border: 4px solid hsla(50.88, 100%, 49.01960784313725%, 0.3);
    border-radius: 5px;
    width: 6.5rem;
    margin: 0 auto;
    margin-top: -6px;

    @media (min-width: 800px) {
        margin: 0;
        margin-top: -6px;
        z-index: -1;
    }
`
