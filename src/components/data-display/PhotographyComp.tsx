import React from 'react'
import styled from 'styled-components'

type PhotographyCompProps = {
    subtitle: string
    paragraph: string
}

const PhotographyComp: React.FC<PhotographyCompProps> = (props) => {
    return (
        <Container>
            <TextContainer>
                <Subtitle>{props.subtitle}</Subtitle>
                <Paragraph>{props.paragraph}</Paragraph>
            </TextContainer>
        </Container>
    )
}

export default PhotographyComp

const Container = styled.div`
    background: url('/images/mobile/image-photography.jpg');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2rem 1.7rem;
    text-align: center;

    @media (min-width: 630px) {
        background: url('/images/desktop/image-photography.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    @media (min-width: 800px) {
        height: 90vh;
        padding: 3.5rem 7rem;
    }

    @media (max-width: 860px){
        padding: 3.5rem 6rem;
    }
`

const TextContainer = styled.div`
    position: relative;
    top: 30px;
`

const Subtitle = styled.h2`
    font: 700 1.5rem 'Fraunces', serif;
    color: hsl(198, 62%, 26%);
`

const Paragraph = styled.p`
    color: hsl(198, 62%, 26%);
    font-size: 0.8rem;
    line-height: 20px;
    margin: 1.4rem 0;
`
