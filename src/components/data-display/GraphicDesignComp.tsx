import React from 'react'
import styled from 'styled-components'

type GraphicDesignCompProps = {
    subtitle: string
    paragraph: string
}

const GraphicDesignComp: React.FC<GraphicDesignCompProps> = (props) => {
    return (
        <Container>
            <TextContainer>
                <Subtitle>{props.subtitle}</Subtitle>
                <Paragraph>{props.paragraph}</Paragraph>
            </TextContainer>
        </Container>
    )
}

export default GraphicDesignComp

const Container = styled.div`
    background: url('/images/mobile/image-graphic-design.jpg');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2rem 1.7rem;
    text-align: center;

    @media (min-width: 630px) {
        background: url('/images/desktop/image-graphic-design.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    @media (min-width: 800px) {
        height: 90vh;
        padding: 3.5rem 5rem;
    }
`

const TextContainer = styled.div`
    position: relative;
    top: 30px;
`

const Subtitle = styled.h2`
    font: 700 1.5rem 'Fraunces', serif;
    color: hsl(167, 40%, 24%);
`

const Paragraph = styled.p`
    color: hsl(167, 40%, 24%);
    font-size: 0.8rem;
    line-height: 20px;
    margin: 1.4rem 0;
`
