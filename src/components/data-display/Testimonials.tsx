import React from 'react'
import styled from 'styled-components'

const clients = [
    {
        name: 'Emily R.',
        job: 'Marketing Director',
        paragraph: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        image: '/images/image-emily.jpg'
    },
    {
        name: 'Thomas S.',
        job: 'Chief Operating Officer',
        paragraph: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
        image: '/images/image-thomas.jpg'
    },
    {
        name: 'Jennie F.',
        job: 'Business Owner',
        paragraph: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        image: '/images/image-jennie.jpg'
    }
]

const Testimonials = () => {
    return (
        <Container>
            <Title>CLIENT TESTIMONIALS</Title>

                <GralContainer>
                {clients.map((item, index) => {
                    return (
                    
                        <TestimonialContainer key={index}>
                            <Photo src={item.image} />
                            <Paragraph>{item.paragraph}</Paragraph>
                            <div>
                                <Name>{item.name}</Name>
                                <CurrentJob>{item.job}</CurrentJob>
                            </div>
                        </TestimonialContainer>

                    
                )})}
                </GralContainer>
            
        </Container>
    )
}

export default Testimonials

const Container = styled.div`
    padding: 2.5rem 1.7rem;
    text-align: center;
    margin: 1rem 0;

    @media (min-width: 800px) {
        margin: 2rem 0;
    }
    
`

const GralContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: center;
        padding: 4rem;
    }
`

const TestimonialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
`

const Title = styled.h3`
    color: hsl(210, 4%, 67%);
    font: 700 0.8rem 'Fraunces', serif;
    letter-spacing: 4px;
    margin-bottom: 2rem;
`

const Photo = styled.img`
    width: 60px;
    border-radius: 100%;
`

const Paragraph = styled.p`
    font-size: 0.8rem;
    line-height: 20px;
    color: hsl(212, 27%, 19%);
`

const Name = styled.p`
    color: hsl(212, 27%, 19%);
    font: 900 1.1rem 'Fraunces', serif;
    margin-bottom: 0.5rem;
`

const CurrentJob = styled.p`
    font-size: 0.8rem;
    color: hsl(210, 4%, 67%);
`
