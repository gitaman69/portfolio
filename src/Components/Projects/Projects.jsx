import React from "react";
import "../Projects/projects.css";
import Footer from "../Footer/Footer";

const Projects = () => {
  return (
    <>
      <section className="card-container">
        <div className="card4">
          <div className="pj4-img"></div>
          <div className="pj4-content">
            Developed a fully functional e-commerce website and management
            system using React and Redux, providing a responsive and scalable
            platform for customers and product management teams
            <br />
            -Designed to be compatible with all screen types, our website
            ensures a seamless experience for every user.
          </div>
          <div className="buttons4">
            <div className="btn4">
              <a href="https://github.com/gitaman69/e-commerce">
                <button className="btnG1 btn">Github</button>
              </a>
              <a href="https://e-commerce-gamma-snowy.vercel.app/">
                <button className="btnD2 btn">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card5">
          <div className="pj5-img"></div>
          <div className="pj5-content">
            This website is aimed at students and workers seeking accommodations
            away from their hometowns, with intuitive filters for budget, area,
            and pincode.
            <br />
            -Designed to be compatible with all screen types, our website
            ensures a seamless experience for every user.
          </div>
          <div className="buttons5">
            <div className="btn5">
              <a href="https://github.com/gitaman69/city-rentals">
                <button className="btnG1 btn">Github</button>
              </a>
              <a href="https://www.cityrentals.site/">
                <button className="btnD2 btn">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="pj2-img"></div>
          <div className="pj2-content">
            -People nowadays are confused about which movie to choose for their
            weekend.
            <br />
            -Our react app resolves this by allowing users to compare movies
            based on their ratings Data obtained using the Open Movie Database
            (OMDB) API.
            <br />
            -Utilized responsive design (Grid Layout and Flexbox) to ensure
            compatibility across all devices.
          </div>
          <div className="buttons2">
            <div className="btn2">
              <a href="https://github.com/gitaman69/movies-rating">
                <button className="btnG2 btn">Github</button>
              </a>
              <a href="https://gitaman69.github.io/movies-rating/">
                <button className="btnG2 btn">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="pj1-img"></div>
          <div className="pj1-content">
            -Discover a clean, responsive, and visually stunning travel and tour
            website built using modern web technologies.
            <br />
            -Designed to be compatible with all screen types, our website
            ensures a seamless experience for every user.
          </div>
          <div className="buttons1">
            <div className="btn1">
              <a href="https://github.com/gitaman69/travels">
                <button className="btnG1 btn">Github</button>
              </a>
              <a href="https://gitaman69.github.io/travels/">
                <button className="btnD2 btn">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="pj3-img"></div>
          <div className="pj3-content">
            -Developed an interactive Tic Tac Toe game using HTML, CSS, and
            JavaScript, featuring responsive design and smooth gameplay.
            <br />
            -Implemented game logic, including win, lose and draw condition,
            enhancing user engagement and experience.
          </div>
          <div className="buttons3">
            <div className="btn3">
              <a href="https://github.com/gitaman69/tic-tac-toe">
                <button className="btnG3 btn">Github</button>
              </a>
              <a href="https://gitaman69.github.io/tic-tac-toe/">
                <button className="btnD3 btn">Demo</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
