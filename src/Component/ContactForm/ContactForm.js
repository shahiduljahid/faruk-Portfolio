import React from "react";
import "./ConatctForm.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div  className="container m-auto  mb-5 mt-5 pt-5 contactForm">
      <div className="row justify-content-center">
        <div className="col-md-6">
            <h1 className="mt-2 mb-3 text-center text-light">Leave a Message</h1>
            
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              className="form-control  mb-3"
             
              placeholder="Name"
              {...register("Name", { required: true })}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              className="form-control mb-3"
              placeholder="Email"
              {...register("Email", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <textarea
              className="form-control mb-3"
              rows="5"
              placeholder="Message"
              {...register("Message", { required: true })}
            ></textarea>

            <input className="d-flex btn btn-color text-bold text-dark m-auto" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
