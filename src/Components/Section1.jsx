import React from 'react'
import Lightning from './Lightning.png'

const Section1 = () => {
  return (
    <div className="section1 p-3 mt-5">
        {/* div1 */}
        <div className="div1 d-flex flex-column justify-content-center align-items-center text-center">

            <div className="div1-1 shadow d-flex flex-row justify-content-center align-items-center text-center border border-secondary-subtle rounded-pill p-2 mb-3"> 
                <img src={Lightning} alt="..." className='me-2' />
                <p className="m-0" style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontStyle: "normal", fontSize:"8px"}}>TOP 1% AMONG THE MOST CREATIVE TALENT</p>
            </div>

            <div className="div1-2 w-50" style={{fontFamily: "Montserrat Alternates, sans-serif",fontWeight: 500,fontStyle: "normal",fontSize: "40px"}}>Real People, Real <br /> Results, Real Affordable.</div>

        </div>
        {/* div1 */}

        {/* div2 */}
        <div className="div2 d-flex justify-content-center mt-3" style={{ fontFamily: "Montserrat Alternates, sans-serif", fontWeight: 400, fontStyle: "normal", fontSize:"15px"}}>
            <p className="w-75 text-center">
            Starting at only <b>$99 a month</b> - Our social strategy services
            have user-friendly tools, social media strategy services, <br /> and a team to make
            you stand out online. <br /> Our affordable, cost-effective social media marketing
            packages provide you with the tools required to build your <br /> business using
            social media content creation and targeted social media campaigns.
            </p>
        </div>
        {/* div2 */}

        {/* div3 */}
        <div className="div3 d-flex justify-content-center">
            <form className="w-50">
                <div className="d-flex justify-content-center mt-3">
                <input type="email"className="form-control m-2 w-50"id="exampleInputEmail1"placeholder="Enter your email"/>
                <button type="submit" className="btn btn-primary m-2 w-25" style={{background: "linear-gradient(86.13deg, #014478 0.03%, #018ABE 99.97%)",fontFamily: "Montserrat Alternates, sans-serif", fontWeight: 400, fontStyle: "normal", fontSize:"12px"}}>Schedule a Demo</button>
                </div>
            </form>
        </div>
        {/* div3 */}
    </div>
  )
}

export default Section1
