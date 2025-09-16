import React from 'react'
import Lightning from './Lightning.png'

const Section5 = () => {
  return (
    <div className='section5 mt-5'>
        {/* div1 */}
        <div className="div5-1 d-flex flex-column justify-content-center align-items-center text-center">

            <div className="tag shadow d-inline-flex flex-row justify-content-center align-items-center text-center border border-secondary-subtle rounded-pill p-2"> 
                <img src={Lightning} alt="..." className='me-2' />
                <p className="m-0" style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontStyle: "normal", fontSize:"8px"}}>AFFORDABLE</p>
            </div>

            <div className='heading mt-2 w-75' style={{fontFamily: "Montserrat Alternates, sans-serif",fontWeight: 500,fontStyle: "normal",fontSize: "40px"}}>
                How it works
            </div>

            <div className="paragraph d-flex justify-content-center mt-3" style={{ fontFamily: "Montserrat Alternates, sans-serif", fontWeight: 400, fontStyle: "normal", fontSize:"15px"}}>
                <p className="w-75 text-center">
                Simplified Social Media Management in Few Easy Steps. We have made managing your social media unproblematic.
                </p>
            </div>

        </div>
        {/* div1 */}

        <div className="div5-2 bg-body-secondary border border-secondary-subtle">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Engagement</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Publish</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Analytics</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Listening</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">abcd</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Influencer Marketing</a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Section5
