import FooterImage from './AboutFooter.jpg';
import React, { useEffect } from 'react';

const Login = () => {

    //https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'; // Replace with your CSS file URL
        link.rel = 'stylesheet';
    
        document.head.appendChild(link);
    
        return () => {
          document.head.removeChild(link);
        };
      }, []);

  return (
    <>
            <div class="containerLogin">
            <form >
                <div class="row">
                <h2 style={{textAlign: 'center'}}>Login with Social Media or Manually</h2>
                <div class="vl">
                    <span class="vl-innertext">or</span>
                </div>

                <div class="col">
                    <a href="#" class="fb btn">
                    <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                    </a>
                    <a href="#" class="twitter btn">
                    <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                    </a>
                    <a href="#" class="google btn">
                    <i class="fa fa-google fa-fw"></i> Login with Google+
                    </a>
                </div>

                <div class="col">
                    <div class="hide-md-lg">
                    <p>Or sign in manually:</p>
                    </div>

                    <input type="text" name="username" placeholder="Username" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="submit" value="Login"/>
                </div>

                </div>
            </form>
            </div>

            <div class="bottom-container">
            <div class="row">
                <div class="col">
                <a href="#" style={{color:'white'}}class="btn">Sign up</a>
                </div>
                <div class="col">
                <a href="#" style={{color:'white'}} class="btn">Forgot password?</a>
                </div>
            </div>
            </div>
            <img src={FooterImage} alt="Example"  style={{ width: '100%' }}/>
    </>
  )
}

export default Login