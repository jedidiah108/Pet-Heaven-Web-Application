import React from 'react'
import logoImage from './PetHeavenAboutLogo.jpg';
import FooterImage from './AboutFooter.jpg';
const About = () => {
  return (
    <>
      {/* <div>
      <h2>About</h2>
      </div> */}

      <div className='About'>
      <div class="about-section" >
      <div class="container2">
      <img src={logoImage} alt="Example"  style={{ width: '100%' }}/>
        <div class="content">
          <h1>About Pet Heaven</h1>
          <p>Pet heaven is a charity society, that cares for the welfare of abandoned pets (i.e. cats and dogs where the original owner no longer want to keep them), 
            and allow online visitors to make request for adoption of the abandoned pets. </p>
        </div>
      </div>
      </div>

      <h2 style={{textAlign:'center'}}>Our Team</h2>
      <div class="row">
      <div class="column">
        <div class="card">
          <img src="https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840" alt="Jane" style={{width:'100%'}}/>
          <div class="container">
            <h2>Naruto</h2>
            <p class="title">CEO & Founder</p>
            <p>Founder of the Pet Heaven</p>
            <p>naruto@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://wegotthiscovered.com/wp-content/uploads/2023/08/Sasuke-Uchiha-Naruto-Shippuden.png" alt="Mike" style={{width:'100%'}}/>
          <div class="container">
            <h2>Sasuke</h2>
            <p class="title">Assistant</p>
            <p>Assistant of the whole project.</p>
            <p>sasuke@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/naruto02/401%EF%BD%9E500/491/C083.jpg" alt="John" style={{width:'100%'}}/>
          <div class="container">
            <h2>Sakura</h2>
            <p class="title">Designer</p>
            <p>Designer of the Pet Heaven</p>
            <p>sakura@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
    
    <img src={FooterImage} alt="Example"  style={{ width: '100%' }}/>
    
      </div>
      
    </>

  )
}

export default About