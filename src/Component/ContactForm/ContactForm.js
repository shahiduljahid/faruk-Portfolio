import React, { useState } from "react";
import "./ConatctForm.css";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const [send,setSend] = useState(false);
  console.log(send)
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm();
  const onSubmit = (data,e) => {

    emailjs.sendForm('service_b3q5dpd', 'template_cly1pg8',e.target, 'user_Se0Rdu8pmQynduEs8uokY')
    .then((result) => {
        console.log(result.text);
        setSend(!send)
        e.target.reset()
        
    }, (error) => {
        console.log(error.text);
    });


  };
  return (
    <div id="contact"  className="container  mb-5 mt-5 pt-5 contactForm">
      <div className= "row justify-content-center">
        <div data-aos="zoom-in" id={send &&`mailSend`} className="col-md-6">
            {

              send? <div>
              <h1 className="mt-2 mb-3 text-center text-light">Your message On the way</h1>
              <button onClick={()=>setSend(!send)} className="text-bold text-dark btn btn-color">Send Another</button>


              </div> : <><h1 className="mt-2 mb-3 text-center text-light">Leave a Message</h1>
            
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="form-control  mb-3"
               
                placeholder="Name"
                {...register("name", { required: true })}
              />
  
              {/* include validation with required or other standard HTML validation rules */}
              <input
                className="form-control mb-3"
                placeholder="Email"
                type='email'
                
                {...register("email", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
  
              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="message"
                {...register("message", { required: true })}
              ></textarea>
  
              <input className="d-flex btn btn-color text-bold text-dark m-auto" type="submit" />
            </form></>
            }
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
