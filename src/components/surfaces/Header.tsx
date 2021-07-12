import React, { useState } from 'react'
import styled from 'styled-components'
import DesktopNavbar from './DesktopNavbar'
import MobileNav from './MobileNav'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu(){
        setShowMenu(!showMenu)
    }

    return (
        <HeaderContainer>
            <Navbar>
                <LogoContainer>
                    <Logo src="/images/logo.svg" alt="" />
                </LogoContainer>
                <MobileMenu src="/images/icon-hamburger.svg" onClick={() => toggleMenu()} />
                {showMenu === true ? <MobileNav /> : ''}
                <DesktopNavbar />
            </Navbar>

            <TitleContainer>
                <Title>WE ARE CREATIVES</Title>
                <ArrowIcon src="/images/icon-arrow-down.svg" alt="" />
            </TitleContainer>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    background: url('/images/mobile/image-header.jpg') no-repeat;
    background-size: cover;
    background-position-y: 65%;
    height: 80vh;
    padding: 1.8rem 1.4rem;

    @media (min-width: 800px){
        background: url('/images/desktop/image-header.jpg') no-repeat;
        background-size: cover;
        background-position-y: 75%;
        background-position-x: center;
        height: 80vh;
    }
`

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    width: 120px;
`
const Logo = styled.img`
    width: 100%;
    cursor: pointer;
`

const MobileMenu = styled.img`
    width: 24px;
    height: 16px;
    cursor: pointer;

    @media (min-width: 800px){ 
        display: none;
    }
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font: 900 2rem 'Fraunces', serif;
    letter-spacing: 6px;
    color: #fff;
    text-align: center;
    margin-top: 2.5rem;

    @media (min-width: 800px){
        font-size: 2.2rem;
    }
`

const ArrowIcon = styled.img`
    width: 28px;
    margin-top: 2.5rem;
`