import '../Skills/skills.css'
import HTML from '../../Assets/html.png'
import CSS from '../../Assets/css.png'
import JavaScript from "../../Assets/javascript.png";
import ReactImg from "../../Assets/react.png";
// import Node from "../../asset/node.png";
import GitHub from "../../Assets/github.png";
import CPP from "../../Assets/c++.png";
import Bootstrap from "../../Assets/bootstrap.png";
import Git from "../../Assets/git.png";
import Footer from '../Footer/Footer';
// import MongoDB from "../../asset/mongo.png"
// import Tailwind from "../../asset/tailwind.png"
// import FireBase from "../../asset/firebase.png"
// import Mysql from "../../asset/mysql.png"
// import Next from "../../asset/next.png"

const Skills = () => {
    return (
        <>
        <div>
            <div className='skills'>
                <div className='skills__info'>
                    <div>
                        <p className='skills__paragraph'>These are the Skills i worked with.</p>
                    </div>

                    <div className='skills__card'>
                        <div className='skills__card-info' style={{backgroundColor:"D8AA96"}}>
                            <img className='skills__image' src={HTML} alt={HTML}></img>
                            <p className='skills__name'>HTML</p>
                        </div>
                        <div className='skills__card-info 'style={{backgroundColor:"D8AA96"}}>
                            <img className='skills__image' src={CSS} alt={HTML}></img>
                            <p className='skills__name'>CSS</p>
                        </div>
                        <div className='skills__card-info'style={{backgroundColor:"D8AA96"}}>
                            <img className='skills__image' src={JavaScript} alt={HTML}></img>
                            <p className='skills__name'>JavaScript</p>
                        </div>


                        <div className='skills__card-info ' style={{backgroundColor:"D8AA96"}}>
                            <img className='skills__image' src={ReactImg} alt={HTML}></img>
                            <p className='skills__name'>ReactJs</p>
                        </div>

                        {/* <div className='skills__card-info'>
                            <img className='skills__image' src={Next} alt={HTML}></img>
                            <p className='skills__name'>NextJs</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={Node} alt={HTML}></img>
                            <p className='skills__name'>NodeJs</p>
                        </div> */}
                        <div className='skills__card-info ' style={{backgroundColor:"D8AA96"}}>
                            <img className='skills__image' src={GitHub} alt={HTML}></img>
                            <p className='skills__name'>GitHub</p>
                        </div>
                        <div className='skills__card-info ' style={{backgroundColor:"D8AA96"}}>
                            <img className='skills__image' src={CPP} alt={HTML}></img>
                            <p className='skills__name'>C++</p>
                        </div>
                        <div className='skills__card-info 'style={{backgroundColor:"D8AA96"}}>
                            <img className='skills__image' src={Bootstrap} alt={HTML}></img>
                            <p className='skills__name'>Bootstrap</p>
                        </div>
                        <div className='skills__card-info 'style={{backgroundColor:"D8AA96"}}>
                            <img className='skills__image' src={Git} alt={HTML}></img>
                            <p className='skills__name'>Git</p>
                        </div>

                        {/* <div className='skills__card-info'>
                            <img className='skills__image' src={MongoDB} alt={HTML}></img>
                            <p className='skills__name'>MongoDB</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={Tailwind} alt={HTML}></img>
                            <p className='skills__name'>Tailwind</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={FireBase} alt={HTML}></img>
                            <p className='skills__name'>FireBase</p>
                        </div>

                        <div className='skills__card-info'>
                            <img className='skills__image' src={Mysql} alt={HTML}></img>
                            <p className='skills__name'>MySql</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Skills