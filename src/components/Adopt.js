import React from 'react'
import FooterImage from './AboutFooter.jpg';
const Adopt = () => {
  return (
    <>

        <div className='Adopt' style={{backgroundColor:' #ffe6f9'}}>
        <img src={FooterImage} alt="Example"  style={{ width: '100%' }}/>
<h2 style={{textAlign: 'center'}}>Visit Registration Form</h2>
<h3 style={{textAlign: 'center'}} >Visit our adorable pets and lead them to your sweet home!</h3>

<div class="container">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Phone</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your Phone number..."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Date</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="DD/MM/YY.."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Country</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="australia">Singapore</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Reason for Visit</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Request"/>
    </div>
  </form>
</div>




<h2 style={{textAlign: 'center'}}>Release Your Pet</h2>
<h3 style={{textAlign: 'center'}} >Release your pet and find new home for them!</h3>

<div class="container">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Breed</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Breed..."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Age</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your pet age.."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Phone</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your Phone number..."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Upload your pet photos</label>
      </div>
      <div class="col-75">
            <form >
        <input type="file" id="myFile" name="filename"/>
      </form>
      </div>
      
    </div>
    
    <div class="row">
      <div class="col-25">
        <label for="subject">Reason for Release</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>





<h2 style={{textAlign: 'center'}}>Adopt our pets</h2>
<h3 style={{textAlign: 'center'}} >Happiness cannot buy, but you can adopt it!</h3>

<div class="container">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Phone</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your Phone number..."/>
      </div>
      
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Select Pet name you want to Adopt</label>
      </div>
      <div class="col-75">
        <div class="custom-select" style={{width:"200px"}}>
  <select>
    <option value="0">Select Pet Name:</option>
    <option value="1">Su Su(Persian)</option>
    <option value="2">Mo Mo(Persian)</option>
    <option value="3">Lucky(Persian)</option>
    <option value="4">Jen(British shorthair)</option>
    <option value="5">Man Man(British shorthair)</option>
    <option value="6">Rosey(British shorthair)</option>
    <option value="7">Lisa(Ragdoll)</option>
    <option value="8">Jisoo(Ragdoll)</option>
    <option value="9">Gi Gi(Ragdoll)</option>
    <option value="10">Janny(Husky)</option>
    <option value="11">Molly(Husky)</option>
    <option value="12">Johny(Husky)</option>
    <option value="13">Doey(Golden Retriever)</option>
    <option value="14">Ross(Golden Retriever)</option>
    <option value="15">Ki Ki(Golden Retriever)</option>
    <option value="16">Sammy(Samoyed)</option>
    <option value="17">Mike(Samoyed)</option>
    <option value="18">Danny(Samoyed)</option>
  </select>
</div>
      </div>
      
    </div>
    
    <div class="row">
      <div class="col-25">
        <label for="subject">Reason for Adopt</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>
<img src={FooterImage} alt="Example"  style={{ width: '100%' }}/>
        </div>
    </>
  )
}

export default Adopt;