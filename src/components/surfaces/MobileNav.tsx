import React from 'react'
import styled from 'styled-components'

const MobileNav = () => {
    return (
        <Container>
            <Menu>
                <ListItem><Link href="#about">About</Link></ListItem>
                <ListItem><Link href="#services">Services</Link></ListItem>
                <ListItem><Link href="#projects">Projects</Link></ListItem>
                <SpButton>CONTACT</SpButton>
            </Menu>
        </Container>
    )
}

export default MobileNav

const Container = styled.div`
    background: hsl(0, 0%, 100%);
    position: absolute;
    top: 12%;
    left: 7%;
    width: 85%;
    text-align: center;
    padding: 1.5rem;
`

const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ListItem = styled.li`
    cursor: pointer;
`

const Link = styled.a`
    text-decoration: none;
    color: hsl(212, 27%, 19%);
`

const SpButton = styled.li`
    font-family: 'Fraunces', serif;
    background: hsl(51, 100%, 49%);
    color: hsl(212, 27%, 19%);
    padding: 0.8rem;
    border-radius: 2rem;
    width: 55%;
    margin: 0 auto;
    cursor: pointer;
`
