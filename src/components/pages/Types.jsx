import React from "react";
import { useNavigate } from "react-router-dom";
// import second from 'first'

const Types = (props) => {
  const redirect = useNavigate()
  function showName(name) {
      redirect(`/View/${name}`)
  }
  return (
    <>
        <div
        class="card position-relativ main-img  rounded-4"
        style={{ border: "1px solid #10375C" }} onClick={() => showName(props.Name)}
      >
        <img
          src={props.Img}
          class="card-img-top propimg opacity-75 rounded-4  "
          alt=""
          style={{ height: "250px" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle  opacity-100">
          <span className="name-title">
          {props.Name}
          </span>
        </div>
      </div>
    </>
  );
};

export default Types;
