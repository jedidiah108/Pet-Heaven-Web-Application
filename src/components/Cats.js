import React from 'react'
import TopImage from './AdoptTop.jpg';
import FooterImage from './AboutFooter.jpg';
const Cats = () => {
  return (
    <>
    <div className='Dogs'>
    <img src={TopImage} alt="Example"  style={{ width: '100%' }}/>
       <div class="row">
       <div class="column">
         <div class="card">
           <img src="https://miro.medium.com/v2/resize:fit:1000/0*XbWq8loQfw4VOFV4.jpg" alt="Jane" style={{width:'100%'}}/>
           <div class="container">
             <h2>Su Su</h2>
             <p class="title">Persian &lt;Female&gt;</p>
             <p>I'm not fat, I'm a little Persian.</p>
             <p>8 months</p>
             <p><button class="button">Adopt</button></p>
           </div>
         </div>
       </div>
 
       <div class="column">
         <div class="card">
           <img src="https://cdn11.bigcommerce.com/s-ch33e/images/stencil/1030x500/uploaded_images/persian-cat.jpg?t=1694624310" alt="Mike" style={{width:'100%'}}/>
           <div class="container">
             <h2>Mo Mo</h2>
             <p class="title">Persian &lt;Female&gt;</p>
             <p>You had me at meow.</p>
             <p>1 year</p>
             <p><button class="button">Adopt</button></p>
           </div>
         </div>
       </div>
 
       <div class="column">
         <div class="card">
           <img src="https://media.graphassets.com/resize=height:360,width:500/output=format:webp/OSKP4E3BRHSCQLlppyEH" alt="John" style={{width:'100%'}}/>
           <div class="container">
             <h2>Lucky </h2>
             <p class="title">Persian &lt;Male&gt;</p>
             <p>Are you kitten me?</p>
             <p>2 years</p>
             <p><button class="button">Adopt</button></p>
           </div>
         </div>
       </div>
     </div>
 
     <div class="row">
       <div class="column">
         <div class="card">
           <img src="https://www.thesprucepets.com/thmb/_OLBCoSj8wLL89fDFLygbj_IsSo=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1280919585-239302f6e0554d2fb156f24b8c618b78.jpg" alt="Jane" style={{width:'100%'}}/>
           <div class="container">
             <h2>Jen</h2>
             <p class="title">British shorthair &lt;Male&gt;</p>
             <p>Check meowt!</p>
             <p>3 months </p>
             <p><button class="button">Adopt</button></p>
           </div>
         </div>
       </div>
 
       <div class="column">
         <div class="card">
           <img src="https://consciouscat.net/wp-content/uploads/2023/04/golden-british-shorthair-cat-lying-on-a-blue-couch_SunRay-BRI-Cattery-RU_Shutterstock.jpg" alt="Mike" style={{width:'100%'}}/>
           <div class="container">
             <h2>Man Man</h2>
             <p class="title">British shorthair &lt;Male&gt;</p>
             <p>Thanks fur the memories!</p>
             <p>8 months</p>
             <p><button class="button">Adopt</button></p>
           </div>
         </div>
       </div>
 
       <div class="column">
         <div class="card">
           <img src="https://www.omlet.co.uk/images/cache/1024/682/British-shorthair-self-cat-lying-on-floor.jpg" alt="John" style={{width:'100%'}}/>
           <div class="container">
             <h2>Rosey</h2>
             <p class="title">British shorthair &lt;Female&gt;</p>
             <p>It’s the purr-fect time for a nap.</p>
             <p>7 months</p>
             <p><button class="button">Adopt</button></p>
           </div>
         </div>
       </div>
     </div>
     <div class="row">
       <div class="column">
         <div class="card">
           <img src="https://brit-petfood.com/file/nodes/product/Ragdoll.JPG" alt="Jane" style={{width:'100%'}}/>
           <div class="container">
             <h2>Lisa</h2>
             <p class="title">Ragdoll &lt;Female&gt;</p>
             <p>I will always meow you.</p>
             <p>5 months</p>
             <p><button class="button">Adopt</button></p>
           </div>
         </div>
       </div>
 
       <div class="column">
         <div class="card">
           <img src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2023/resources/Ragdoll.jpg" alt="Mike" style={{width:'100%'}}/>
           <div class="container">
             <h2>Jisoo</h2>
             <p class="title">Ragdoll &lt;Female&gt;</p>
             <p>Meow?</p>
             <p>1 year old</p>
             <p><button class="button">Adopt</button></p>
           </div>
         </div>
       </div>
 
       <div class="column">
         <div class="card">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ragdoll_Kater%2C_drei_Jahre_alt%2C_RAG_n_21_seal-tabby-colourpoint%2C_Januar_2015.JPG/1024px-Ragdoll_Kater%2C_drei_Jahre_alt%2C_RAG_n_21_seal-tabby-colourpoint%2C_Januar_2015.JPG" alt="John" style={{width:'100%'}}/>
           <div class="container">
             <h2>Gi Gi</h2>
             <p class="title">Ragdoll &lt;Male&gt;</p>
             <p>You can't buy happiness, but you can adopt it.</p>
             <p>7 months</p>
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

export default Cats;