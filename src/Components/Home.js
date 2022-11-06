import React from 'react'
import BGVideo from "../Video/video.mp4"
import { Link } from "react-router-dom";
 



export default function Home(props){
    
    return(
        <>
        <div>
            {/* <Navbar title="Daddu's" Mode={props.Mode} text={props.text} toogleMode={props.toogleMode} moon={props.moon} /> */}
        <video className="container-fluid video" src={BGVideo} autoPlay loop muted />

        <div className="wrapper">
            <div className="static-txt">I'm </div>
            <ul className="dynamic-txts">
                <li><span>Lucky Kanathe</span></li>
                <li><span>Computer Science Student</span></li>
                <li><span>Front-End Developer</span></li>
                <li><span>Learner</span></li>
            </ul>
        </div>


        <nav className="d-flex footer justify-content-center align-items-baseline bg-dark text-light  navbar">
                
                <p> A Product By &nbsp;</p>  <Link className="nav-link product" to="/">Daddu's Production</Link><p className="copy"> 	&nbsp; &#169; 2022</p>	
            
           </nav>

        </div>
      
        </>
    )

}