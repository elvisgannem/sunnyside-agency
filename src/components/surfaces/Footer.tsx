import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <Logo src="/images/darklogo.svg" alt="Logo" />
            <List>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#projects">Projects</Link></li>
            </List>
            <SocialIcons>
                <img src="/images/icon-facebook.svg" alt="Facebook" />
                <img src="/images/icon-instagram.svg" alt="Facebook" />
                <img src="/images/icon-twitter.svg" alt="Facebook" />
                <img src="/images/icon-pinterest.svg" alt="Facebook" />
            </SocialIcons>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #76dac4;
    padding: 2rem;
    gap: 2rem;
`

const Link = styled.a`
    color: hsl(167, 40%, 24%);
    text-decoration: none;
`

const Logo = styled.img`
    color: black;
    width: 130px;
`

const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;
    color: hsl(167, 40%, 24%);
    font-size: 0.9rem;
`

const SocialIcons = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
`
