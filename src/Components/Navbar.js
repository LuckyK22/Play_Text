import React  from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
 

  return(


<>


  <nav className=" navbar navbar-expand-lg"  abcd = "Lucky">
  {/* {`navbar navbar-expand-lg bg-${props.Mode}`}   */}
      <div className="container-fluid">

        {/*------------------------------------------------------- Main Heading------------------------------------------------------- */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* --------------------------------------------------------------------------------------------------------------------------- */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
      </div>
  </nav>
     
     
     
</>

  )
}