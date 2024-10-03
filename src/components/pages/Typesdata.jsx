import React from 'react'
import Types from './Types'

const Typesdata = () => {
  return (
    <>
     <div className="row mx-5 my-5">
        <h1 className="Buzz-title  text-center fw-bold mb-4 " style={{color:"#844685"}}>Blogger Buzz</h1>
        <div className="col-lg-4 ">
          
          <Types Img="public/img/travelling.jpg" Name="Travel"  style={{width: "27rem"}} />
        </div>
        <div className="col-lg-4 ">
          <Types Img="public/img/eat.jpg" Name="Eat "style={{width: "27rem"}} />
        </div>
        <div className="col-lg-4">
          <Types Img="public/img/relax.jpg" Name="Relax " style={{width: "27rem"}} />
        </div> 
        {/* <div className="col-lg-4 mt-3">
          <Types Img="public/img/Fashion and beauty.jpg" Name="Fashion and beauty "  style={{width: "27rem"}}/>
        </div>
        <div className="col-lg-4 mt-3">
          <Types Img="public/img/Travel.jpg" Name="Travel "style={{width: "27rem"}} />
        </div>
        <div className="col-lg-4 mt-3">
          <Types Img="public/img/Art and design.jpg" Name="Art and design "style={{width: "27rem"}} />
        </div> */}
      </div>
    </>
  )
}

export default Typesdata