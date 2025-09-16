import React from 'react'
import Card from './Card'
import Card_pic_1 from './Card_pic_1.jpg'
import Card_pic_2 from './Card_pic_2.jpg'
import Card_pic_3 from './Card_pic_3.jpg'
import Card_pic_4 from './Card_pic_4.jpg'
const Section3 = () => {
  return (
    <div className='section3 mt-5'>
        {/* div1 */}
        <div className="div3-1 d-flex flex-column justify-content-center align-items-center text-center">

            <div className="tag shadow d-inline-flex flex-row justify-content-center align-items-center text-center border border-secondary-subtle rounded-pill p-2"> 
                <p className="m-0" style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontStyle: "normal", fontSize:"8px"}}>PREMIUM QUALITY</p>
            </div>

            <div className='heading mt-2 w-75' style={{fontFamily: "Montserrat Alternates, sans-serif",fontWeight: 500,fontStyle: "normal",fontSize: "40px"}}>
                Affordable, Reliable Social Media <br /> Solutions for Small Businesses
            </div>

            <div className="paragraph d-flex justify-content-center mt-3" style={{ fontFamily: "Montserrat Alternates, sans-serif", fontWeight: 400, fontStyle: "normal", fontSize:"15px"}}>
                <p className="w-75 text-center">
                Take the guesswork out of social media management. Our fixed monthly rate ensures professional content creation and scheduling for Facebook, Instagram, and LinkedIn—no unexpected costs, no hassle
                </p>
            </div>

        </div>
        {/* div1 */}


        {/* div2 */}
        <div className="div3-2 d-flex justify-content-center align-items-center">
            <Card
            img={Card_pic_1}
            heading={"Social Media Posts"}
            paragraph={"Lorem ipsum dolor sit amet consectetur. Amet eu massa elit facilisis vel egestas leo. Molestie est."}
            />
            <Card
            img={Card_pic_2}
            heading={"Short-Form Videos"}
            paragraph={"Lorem ipsum dolor sit amet consectetur. Amet eu massa elit facilisis vel egestas leo. Molestie est."}
            />
            <Card
            img={Card_pic_3}
            heading={"Email Design"}
            paragraph={"Lorem ipsum dolor sit amet consectetur. Amet eu massa elit facilisis vel egestas leo. Molestie est."}
            />
            <Card
            img={Card_pic_4}
            heading={"Blog Posts"}
            paragraph={"Lorem ipsum dolor sit amet consectetur. Amet eu massa elit facilisis vel egestas leo. Molestie est."}
            />
        </div>
        {/* div2 */}

    </div>
  )
}

export default Section3
