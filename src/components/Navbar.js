import React from 'react'
import css from '../components css/Navbar.css'
import background from '../images/background.jpg'
export default function Navbar(props) {
  return (
    <>
            
                <nav class="navbar navbar-expand-lg bg-light">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#">Zee's Gaming Area</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link " aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/Store">Store</a>
                        </li>
                        
                        <li class="nav-item ">
                          <a class="nav-link" href="/Contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

           <div className="couple">
              <h1>{props.titleh1}</h1>
            <h2>{props.titleh2}</h2>
            </div>
        <div className="background ">
            <img className='img-fluid' src={background} alt=""  />
            
        </div>
    </>

  )
}
