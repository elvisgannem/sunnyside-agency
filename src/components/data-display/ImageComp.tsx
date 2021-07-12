import React from 'react'
import styled from 'styled-components'

type ImageCompProps = {
    image: string
}
const ImageComp: React.FC<ImageCompProps> = ({image}) => {
    return (
        <div>
            <Image src={image} alt="Egg" />
        </div>
    )
}

export default ImageComp

const Image = styled.img`
    width: 100%;
    height: 100%;
`

