import React from 'react';
import '../Home/home.css';
import Type from './Type';
import imgLogo from '../../Assets/imgLogo.png';
import Home2 from './home2';


const Home = () => {
  return (
    <section>
    <div className='homeContainer'>
      <div className="leftPart">
        <h1 className="heading">
          Hi There!
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1 className="name">
          I'M 
          <strong className="mainName">
            AMAN BHAKAR
          </strong>
        </h1>

        <div style={{ marginTop: "7vh", textAlign: "left", color: "rgb(255, 228, 24)", fontSize: "30px", fontWeight: "500" }}>
          <Type />
        </div>
      </div>

      <div className="rightPart">
        <div className="imgLogo">
          <img className='homeLogo' src={imgLogo} alt="developer" />
        </div> 
      </div>
    </div>
    <Home2/>
    </section>
  );
};

export default Home;
