import React from "react";
import "../Projects/projects.css";
import Footer from "../Footer/Footer";

const Projects = () => {
  return (
    <>
    <section className="card-container">
      <div className="card1">
        <div className="pj1-img"></div>
        <div className="pj1-content">
          -Discover a clean, responsive, and visually stunning travel and tour
          website built using modern web technologies.
          <br/>
          -Designed to be compatible with all screen types, our website ensures a seamless experience for every user.
        </div>
        <div className="buttons1">
            <div className="btn1">
                <button className="btnG1 btn"><a href="https://github.com/gitaman69/travels">Github</a></button>
                <button className="btnD2 btn"><a href="https://gitaman69.github.io/travels/">Demo</a></button>
            </div>
        </div>
      </div>
      <div className="card2">
        <div className="pj2-img"></div>
        <div className="pj2-content">
        	-People nowadays are confused about which movie to choose for their weekend.
            <br/>
            -Our react app resolves this by allowing users to compare movies based on their ratings
	        Data obtained using the Open Movie Database (OMDB) API.
            <br/>
	        -Utilized responsive design (Grid Layout and Flexbox) to ensure compatibility across all devices.
        </div>
        <div className="buttons2">
            <div className="btn2">
                <button className="btnG2 btn"><a href="https://github.com/gitaman69/movies-rating">Github</a></button>
                <button className="btnG2 btn"><a href="https://gitaman69.github.io/movies-rating/">Demo</a></button>
            </div>
        </div>
      </div>
      <div className="card3">
        <div className="pj3-img"></div>
        <div className="pj3-content">
        	-Developed an interactive Tic Tac Toe game using HTML, CSS, and JavaScript, featuring responsive design and smooth gameplay.
            <br/>
	        -Implemented game logic, including win, lose and draw condition, enhancing user engagement and experience.
        </div>
        <div className="buttons3">
            <div className="btn3">
                <button className="btnG3 btn"><a href="https://github.com/gitaman69/tic-tac-toe">Github</a></button>
                <button className="btnD3 btn"><a href="https://gitaman69.github.io/tic-tac-toe/">Demo</a></button>
            </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Projects;
