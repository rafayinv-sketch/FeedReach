import React from 'react'
import Background from './Background.png'
import Company1 from './Company1.png'
import Company2 from './Company2.png'
import Company3 from './Company3.png'
import Company4 from './Company4.png'
import Company5 from './Company5.png'
import Company6 from './Company6.png'
import Company7 from './Company7.png'

const Section2 = () => {
  return (
    <div className='Section2 d-block justify-content-center align-items-center'>
        <div className="div1 d-flex justify-content-center align-items-center">
            <img src={Background} alt="..." className='img-fluid'/>
        </div>
        <div className="div2 d-flex flex-column justify-content-center align-items-center">
            <div className="div2-1 d-flex justify-content-center align-items-center mt-4">
                <p style={{fontFamily: "Montserrat Alternates, sans-serif",fontStyle: "normal", fontSize:"12px"}}>Join thousands of teams already streamlining their workflows with Projecty.</p>
            </div>
            <div className="div2-2 d-inline-flex justify-content-center align-items-center bg-body-secondary border border-secondary-subtle rounded p-2">
                <div>
                    <img src={Company1} alt="..." className="mx-3" style={{ height: "14px", objectFit: "contain" }} />
                    <img src={Company2} alt="..." className="mx-3" style={{ height: "14px", objectFit: "contain" }} />
                    <img src={Company3} alt="..." className="mx-3" style={{ height: "14px", objectFit: "contain" }} />
                    <img src={Company4} alt="..." className="mx-3" style={{ height: "25px", objectFit: "contain" }} />
                    <img src={Company5} alt="..." className="mx-3" style={{ height: "14px", objectFit: "contain" }} />
                    <img src={Company6} alt="..." className="mx-3" style={{ height: "14px", objectFit: "contain" }} />
                    <img src={Company7} alt="..." className="mx-3" style={{ height: "14px", objectFit: "contain" }} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Section2
