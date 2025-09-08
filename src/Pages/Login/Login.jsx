import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import axios from "axios"
const LoginPage = () => {


  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  };

  const welcomeSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A86B',
    color: '#fff',
    padding: '32px',
    textAlign: 'center',
  };

  const logoStyle = {
    width: '150px',
    height: '150px',
    marginBottom: '24px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    objectFit: 'contain',
  };

  const welcomeTitleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const welcomeTextStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
  };

  const loginSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '400px',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  };

  const subtitleStyle = {
    fontSize: '16px',
    marginBottom: '32px',
    color: '#666',
  };

  const inputStyle = {
    height: '48px',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '0 16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  // const forgotPasswordStyle = {
  //   textAlign: 'right',
  //   marginBottom: '24px',
  // };

  // const linkStyle = {
  //   color: '#007AFF',
  //   fontSize: '14px',
  //   textDecoration: 'none',
  // };

  const buttonStyle = {
    height: '48px',
    width: '100%',
    backgroundColor: '#00A86B',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '24px',
  };

  const signupContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // const signupTextStyle = {
  //   fontSize: '14px',
  //   color: '#666',
  //   marginRight: '4px',
  // };



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false)

  const handleLogin = async (e) => {
 e.preventDefault()
    try {
      if(email == "" || password == "")
        return
      setloading(true)
      const res = await axios.post("https://manfess-backend.onrender.com/api/adminlogin",
        {
          username: email,
          password: password
        });
      if (res.status == 200) {
        alert(res.data.message);
        window.location.reload()
      }else{
             alert(res.data.message);
      }
      localStorage.setItem("admin-token", res.data.token)
    } catch (error) {
      console.log(error)
      alert(error?.message + error || "invalid credentials" )
    }
    finally{
 setloading(false)
    }

  };
  return (
    <form style={containerStyle} onSubmit={handleLogin}>
      <div style={welcomeSectionStyle}>
        <img
          src={logo}
          alt="School Logo"
          style={logoStyle}
        />
        <h1 style={welcomeTitleStyle}>Welcome to MANFESS website</h1>
        <p style={welcomeTextStyle}>
          Discover a world of learning and growth. Log in to access your personalized dashboard, courses, and community.
        </p>
      </div>
      <div style={loginSectionStyle}>
        <div style={formStyle}>
          <h2 style={titleStyle}>Sign In</h2>
          <p style={subtitleStyle}>Enter your credentials to access your account</p>

          <input
            type="text"
            placeholder="Name*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            aria-label="Email input"
          />

          <input
            type="text"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            aria-label="Password input"
          />

          {/* <div style={forgotPasswordStyle}>
            <a href="#" style={linkStyle}>Forgot Password?</a>
          </div> */}

          <button onClick={handleLogin} style={buttonStyle}>
            {loading? "loading...": "Login"}
          </button>

          <div style={signupContainerStyle}>
            {/* <p style={signupTextStyle}>Don't have an account?</p>
            <a href="#" style={linkStyle}>Sign Up</a> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;