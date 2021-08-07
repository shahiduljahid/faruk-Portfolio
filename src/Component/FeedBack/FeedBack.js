import React from "react";

const FeedBack = ({ feedback }) => {
  return (
    <div className="col-md-3  mx-1 mb-5 rounded shadow px-4 py-5">
      <h4 className="mb-2">{feedback.title}</h4>

      <p className="mt-1">{feedback.des}</p>

      <div className="d-flex mt-2">
        <img
          style={{ height: "100px" }}
          src={feedback.img}
          alt="workImg"
          className="img-fluid"
        />
        <div >
        <h4 className="ms-2 ">{feedback.name}</h4>
        <p className="ms-2 ">{feedback.address}</p>
        </div>
        
      </div>
    </div>
  );
};

export default FeedBack;
