import './StepFive.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {SectioWrapper,PrimaryButtons,SecondaryButtons} from '../../components/index'
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";
import { auth } from '../../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const StepFive = () => {
  const [otp, setOtp] = useState('');
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {

          },
        },
          auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth,formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div>
    <SectioWrapper>
    <section style={{
      display: 'flex',alignItems: 'center',justifyContent: 'center',height: '100vh'}}>
  <div>
    <Toaster toastOptions={{duration:4000}}/>
    <div id="recaptcha-container"></div>
    {
      user ? (
      <h2 style={{textAlign: 'center',color: 'white',fontWeight: 'medium',fontSize: '2rem'}}>
      👍 Login Success
    </h2>
      ):(
      <div id="recaptcha-container"></div> 
    )}    
    
    <div style={{width: '20rem',display: 'flex',flexDirection: 'column',gap: '1rem',borderRadius: '0.5rem',padding: '1rem',
    }}>
      <h1 style={{
    textAlign: 'center',lineHeight: 'normal',color: 'white',fontWeight: 'medium',fontSize: '2rem',marginBottom: '1rem'}}>
        Welcome to CODE A PROGRAM
      </h1>
     {
      showOTP ? ( 
      <>
      <div style={{backgroundColor: 'white',color: '#10B981', width: 'fit-content',marginLeft: 'auto', marginRight: 'auto', padding: '0.5rem',borderRadius: '50%'
}}>
        <BsFillShieldLockFill size={30}/>
      </div>
      <label
                  htmlFor="otp"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    color: 'white',
                    textAlign: 'center'
                  }}
                >
                  Enter your OTP
                </label>
               <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      type='number'
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0.5rem',marginRight: '0 !important',
        flex: '1',
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        outline: 'none'
      }}
    />
     <button  onClick={onOTPVerify}
                
                style={{
                  backgroundColor: '#047857',
                  width: '100%',
                  display: 'flex',
                  gap: '0.25rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '0.625rem',
                  paddingBottom: '0.625rem',
                  color: 'white',
                  borderRadius: '0.25rem'
                }}
                >
                  {
                    loading &&
                
              
                  <CgSpinner size={20} style={{
                  marginTop: '0.25rem',
                  animation: 'spin 1s linear infinite'
                }} />  }
                  <span>Verify OTP</span>
    </button>
      </>) :(
       <>
       <div style={{backgroundColor: 'white',color: '#10B981', width: 'fit-content',marginLeft: 'auto', marginRight: 'auto', padding: '0.5rem',borderRadius: '50%'
 }}>
         <BsTelephoneFill size={30}
         style={{
          fontWeight: 'bold',
          fontSize: '1rem',
          color: '#A87561',
          textAlign: 'center'
        }}
         />
       </div>
       <label
                   htmlFor=""
                   style={{
                     fontWeight: 'bold',
                     fontSize: '1rem',
                     color: 'white',
                     textAlign: 'center'
                   }}
                 >
                   Verify your phone number
                 </label>
            <PhoneInput country={"in"} value={ph} onChange={setPh}
            style={{
              color:'black',
            }}
            />  
      <button onClick={onSignup}
                 
                 style={{
                   backgroundColor: '#A87561',
                   width: '100%',
                   display: 'flex',
                   gap: '0.25rem',
                   alignItems: 'center',
                   justifyContent: 'center',
                   paddingTop: '0.625rem',
                   paddingBottom: '0.625rem',
                   color: 'white',
                   borderRadius: '0.25rem'
                 }}
                 >
                   {
                     loading &&
 
                   <CgSpinner size={20} style={{
                   marginTop: '0.25rem',
                   animation: 'spin 1s linear infinite'
                 }} />  }
                   <span>Send via SMS</span>
     </button>
       </>
      )
}
     
    </div>
  </div>
</section>
    </SectioWrapper>
    </div>
  )
}

export default StepFive
