import React from 'react'
import styled from 'styled-components'

const DesktopNavbar = () => {
    return (
        <Navbar>
            <ListItem><Link href="#about">About</Link></ListItem>
            <ListItem><Link href="#services">Services</Link></ListItem>
            <ListItem><Link href="#projects">Projects</Link></ListItem>
            <SpButton>CONTACT</SpButton>
        </Navbar>
    )
}

export default DesktopNavbar

const Navbar = styled.ul`
    display: flex;
    list-style: none;
    color: hsl(0, 0%, 100%);
    font-family: 'Barlow';
    gap: 2rem;
    align-items: center;

    @media (max-width: 800px) {
        display: none;
    }
`

const Link = styled.a`
    color: hsl(0, 0%, 100%);
    text-decoration: none;
    &:hover{
        transition: 0.5s;
        color: hsla(0, 0%, 100%, 0.678);
    }
`

const ListItem = styled.li`
    cursor: pointer;

`

const SpButton = styled.li`
    font-family: 'Fraunces', serif;
    background: hsl(0, 0%, 100%);
    color: hsl(212, 27%, 19%);
    padding: 0.8rem;
    border-radius: 2rem;
    cursor: pointer;

    &:hover{
        transition: 0.7s;
        background: hsl(51, 100%, 49%);
        color: hsl(212, 27%, 19%);
    }
`
