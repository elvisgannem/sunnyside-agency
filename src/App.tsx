import React from 'react'
import Header from './components/surfaces/Header'
import Footer from './components/surfaces/Footer'
import ImageComp from './components/data-display/ImageComp'
import PrincipalInfo from './components/data-display/PrincipalInfo'
import GraphicDesignComp from './components/data-display/GraphicDesignComp'
import PhotographyComp from './components/data-display/PhotographyComp'
import Testimonials from './components/data-display/Testimonials'
import ImagesGrid from './components/data-display/ImagesGrid'
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="transform_container" id="about">
        <ImageComp image={'/images/desktop/image-transform.jpg'}/>
        <PrincipalInfo subtitle={'Transform your brand'} paragraph={'We are a full-service creative agency specializaing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'} button={'LEARN MORE'} />
      </div>

      <div className="stand-out_container">
        <ImageComp image={'/images/desktop/image-stand-out.jpg'} />
        <PrincipalInfo subtitle={'Stand out to the right audience'} paragraph={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend your brand in digital places.'} button={'LEARN MORE'} />
      </div>

      <div className="photos_container" id="services">
        <GraphicDesignComp subtitle={'Graphic Design'} paragraph={'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.'} />

        <PhotographyComp subtitle={'Photography'} paragraph={'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'} />
      </div>

      <Testimonials />

      <div id="projects">
        <ImagesGrid />
      </div>

      <Footer />
    </div>
  )
}

export default App
