import FooterImage from './AboutFooter.jpg';
import React, { useEffect } from 'react';
import Map from './Map.jpg';

const Contact = () => {
  useEffect(() => {
    const loadExternalStyles = (url) => {
      const link = document.createElement('link');
      link.href = url;
      link.rel = 'stylesheet';

      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    };

    // Load the first external stylesheet
    const cleanup1 = loadExternalStyles('https://www.w3schools.com/w3css/4/w3.css');

    // Load the second external stylesheet
    const cleanup2 = loadExternalStyles('https://fonts.googleapis.com/css?family=Lato');

    // Load the third external stylesheet
    const cleanup3 = loadExternalStyles('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

    return () => {
      cleanup1();
      cleanup2();
      cleanup3();
    };
  }, []);
  return (

    <>
    <div>
        <img src="AboutUsBack.jpg" alt="" style={{ width: '100%' }}/>
    </div>
    <div class="w3-content w3-container w3-padding-64" id="contact">
        <h3 class="w3-center">Contact Pet Heaven!</h3>
        <p class="w3-center"><em>We'd love your feedback!</em></p>
      
        <div class="w3-row w3-padding-32 w3-section">
          <div class="w3-col m4 w3-container">
            <img src={Map} class="w3-image w3-round" style={{ width: '500px' }}/>
          </div>
          <div class="w3-col m8 w3-panel">
            <div class="w3-large w3-margin-bottom">
              <i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Clementi, Singapore<br/>
              <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +65 12345678<br/>
              <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: petheaven@mail.charity.sg<br/>
            </div>
            <p>Swing by for a cup of <i class="fa fa-coffee"></i>, or leave me a note:</p>
            <form >
              <div class="w3-row-padding" style={{margin:'0 -16px 8px -16px '}}>
                <div class="w3-half">
                  <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
                </div>
                <div class="w3-half">
                  <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"/>
                </div>
              </div>
              <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"/>
              <button class="w3-button w3-black w3-right w3-section" type="submit">
                <i class="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
      <img src={FooterImage} alt="Example"  style={{ width: '100%' }}/>


    </>


  )
}

export default Contact