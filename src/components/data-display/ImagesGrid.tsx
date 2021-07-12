import React from 'react'
import styled from 'styled-components'

const ImagesGrid = () => {
    return (
        <Container>
                <Image src="/images/mobile/image-gallery-milkbottles.jpg" alt="" />
                <Image src="/images/mobile/image-gallery-orange.jpg" alt="" />
                <Image src="/images/mobile/image-gallery-cone.jpg" alt="" />
                <Image src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="" />
        </Container>
    )
}

export default ImagesGrid

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

const Image = styled.img`
    width: 50%;

    @media (min-width: 800px) {
        width: 25%;
    }
`