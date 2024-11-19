import React from 'react'
import logoImage from './PetHeavenlogo1.jpg';
const Home = () => {
  return (
    <>
    <div className='Home'>
      <div className='Logo'>
        <img src={logoImage} alt="Example" />
      </div>
      {/* <div>
        <img src='https://topdogtips.com/wp-content/uploads/2019/07/13-Reasons-Why-Owners-Abandon-Their-Dogs.jpg' />
      </div> */}
      <div class="container1">
      <img src="https://topdogtips.com/wp-content/uploads/2019/07/13-Reasons-Why-Owners-Abandon-Their-Dogs.jpg" alt="Abandoned Dog"  />
        <div class="content">
          <h1>What if you were them?</h1>
          <p>Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day.</p>
        </div>
      </div>
      
    </div>
    
    </>

  )
}

export default Home