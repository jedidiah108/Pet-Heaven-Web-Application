import React from 'react'
import TopImage from './AdoptTop.jpg';
import FooterImage from './AboutFooter.jpg';
const Dogs = () => {
  return (
   <>
   <div className='Dogs'>
   <img src={TopImage} alt="Example"  style={{ width: '100%' }}/>
      <div class="row">
      <div class="column">
        <div class="card">
          <img src="https://www.dailypaws.com/thmb/B6yWhzGpQZsg3kxMzLn-hvGIF7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siberian-husky-100800827-2000-9449ca147e0e4b819bce5189c2411188.jpg" alt="Jane" style={{width:'100%'}}/>
          <div class="container">
            <h2>Janny</h2>
            <p class="title">Husky &lt;Male&gt;</p>
            <p>I'm not fat, I'm a little husky.</p>
            <p>1 year old</p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://www.treehugger.com/thmb/M002yc2evjn-i6gRCC6DSqPX1_E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-of-siberian-husky-on-snow-covered-field-1321125441-caba351f6be24932af51c65e1fbb28d9.jpg" alt="Mike" style={{width:'100%'}}/>
          <div class="container">
            <h2>Molly</h2>
            <p class="title">Husky &lt;Female&gt;</p>
            <p>Woof. Woof? Woof!</p>
            <p>8 months</p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://a-z-animals.com/media/2023/06/iStock-1338954116.jpg" alt="John" style={{width:'100%'}}/>
          <div class="container">
            <h2>Johnny </h2>
            <p class="title">Husky &lt;Male&gt;</p>
            <p>Who you callin' "bad dog?"</p>
            <p>8 months</p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <div class="card">
          <img src="https://www.akc.org/wp-content/uploads/2020/07/Golden-Retriever-puppy-standing-outdoors.jpg" alt="Jane" style={{width:'100%'}}/>
          <div class="container">
            <h2>Doey</h2>
            <p class="title">Golden Retriever &lt;Male&gt;</p>
            <p>It's my paw-ty, I can bark if I want to!</p>
            <p>1 month </p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://www.rover.com/blog/wp-content/uploads/2020/06/Golden-Retriever-2.jpg" alt="Mike" style={{width:'100%'}}/>
          <div class="container">
            <h2>Ross</h2>
            <p class="title">Golden Retriever &lt;Male&gt;</p>
            <p>Raise the woof!</p>
            <p>8 months</p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://www.lucypetproducts.com/wp-content/uploads/2020/01/Golden4.jpg" alt="John" style={{width:'100%'}}/>
          <div class="container">
            <h2>Ki Ki</h2>
            <p class="title">Golden Retriever &lt;Female&gt;</p>
            <p>The sign is true: I am fur-ocious.</p>
            <p>7 months</p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="card">
          <img src="https://t3.ftcdn.net/jpg/05/85/08/52/360_F_585085296_yrBZ1L2yOlWiLlxS8r4iMPlwytNbPwMl.jpg" alt="Jane" style={{width:'100%'}}/>
          <div class="container">
            <h2>Sammy</h2>
            <p class="title">Samoyed &lt;Male&gt;</p>
            <p>I will always woof you.</p>
            <p>2 months</p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://www.thesprucepets.com/thmb/TYDiDB2kbe73ZmVUyf3sRtsXCB0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/samoyed-dog-breed-profile-4586270-hero-46071e9d7a1b465386688bc98837f00d.jpeg" alt="Mike" style={{width:'100%'}}/>
          <div class="container">
            <h2>Mike</h2>
            <p class="title">Samoyed &lt;Male&gt;</p>
            <p>My best friend has four paws.</p>
            <p>6 months</p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="https://cdn.britannica.com/85/235885-050-C8CC6D8B/Samoyed-dog-standing-snow.jpg" alt="John" style={{width:'100%'}}/>
          <div class="container">
            <h2>Danny</h2>
            <p class="title">Samoyed &lt;Male&gt;</p>
            <p>You can't buy happiness, but you can adopt it.</p>
            <p>1 year old</p>
            <p><button class="button">Adopt</button></p>
          </div>
        </div>
      </div>
    </div>
    
    <img src={FooterImage} alt="Example"  style={{ width: '100%' }}/>
    </div>
   </>

  )
}

export default Dogs