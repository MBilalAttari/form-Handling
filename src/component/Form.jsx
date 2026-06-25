import React, { useEffect, useState } from "react";
import { FaLock, FaRegEye, FaRegEyeSlash, FaUserLarge } from "react-icons/fa6";
import { MdMail, MdPhone } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Form = (props) => {
  const [value, setValue] = useState();
  const [slide, setSlide] = useState(false);
  useEffect(() => {
    if (props.display[0] == "flex") {
      setSlide(true);
    } else {
      setSlide(false);
    }
  }, [props.display[0]]);

  return (
    <div
      style={!props.err ? { display: props.display[0] } : { display: "flex" }}
      className={`flex flex-col items-start gap-3 w-full ${slide ? "slideLeft" : null}`}
    >
      <div className="flex items-center mb-4 gap-1">
        <h2 className="font-bold">Already have an Account?</h2>
        <button className="bg-green-500 font-bold p-2 text-white">
          Sign in to LMS
        </button>
      </div>
      <h2 className="font-bold text-orange-400 text-lg">Create New Account</h2>
      <form
        className="flex flex-col items-start gap-2 w-full"
        onSubmit={props.handleForm}
      >
        <label htmlFor="firstName">First Name</label>
        <div className="flex w-full items-center gap-2 border-2 border-gray-300 rounded-md p-2 focus-within:outline-2">
          <FaUserLarge color="gray" size={16} />
          <input
            type="text"
            className="w-full outline-none"
            id="firstName"
            placeholder="Please Enter your first name"
            onChange={props.handleChange}
          />
        </div>
        {props.err && props.userData.firstName.trim() == "" ? (
          <p className="text-red-700 text-sm">This field Should not be empty</p>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <div className="flex w-full items-center gap-2 border-2 border-gray-300 rounded-md p-2 focus-within:outline-2">
          <FaUserLarge color="gray" size={16} />
          <input
            type="text"
            className="w-full outline-none"
            id="lastName"
            placeholder="Please Enter your last name"
            onChange={props.handleChange}
          />
        </div>
        {props.err && props.userData.lastName.trim() == "" ? (
          <p className="text-red-700 text-sm">This field Should not be empty</p>
        ) : null}

        <label htmlFor="mobileNo">Mobile No.</label>
        <div className="flex w-full items-center gap-2 border-2 border-gray-300 rounded-md p-2 focus-within:outline-2">
          <PhoneInput
            international
            defaultCountry="PK"
            value={value}
            onChange={setValue}
            placeholder="Enter phone number"
            className="outline-none w-20"
          />
          <input
            type="text"
            className="w-full outline-none"
            id="mobileNo"
            placeholder="Please Enter your mobile number"
            onChange={props.handleChange}
          />
        </div>
        {props.err && props.userData.mobileNo.trim() == "" ? (
          <p className="text-red-700 text-sm">This field Should not be empty</p>
        ) : null}

        <label htmlFor="email">Email</label>
        <div className="flex w-full items-center gap-2 border-2 border-gray-300 rounded-md p-2 focus-within:outline-2">
          <MdMail color="gray" size={20} />
          <input
            type="email"
            className="w-full outline-none"
            id="email"
            placeholder="Please Enter your email"
            onChange={props.handleChange}
          />
        </div>
        {props.err && props.userData.email.trim() == "" ? (
          <p className="text-red-700 text-sm">This field Should not be empty</p>
        ) : null}

        <label htmlFor="password">Password</label>
        <div className="flex w-full items-center gap-2 border-2 border-gray-300 rounded-md p-2 focus-within:outline-2">
          <FaLock color="gray" size={14} />
          <input
            type={props.typeChange[0]}
            className="w-full outline-none"
            id="password"
            placeholder="Please Enter your password"
            onChange={props.handleChange}
          />
          <span onClick={props.handleTypeChange}>
            {props.typeChange[1] ? (
              <FaRegEye color="gray" size={16} />
            ) : (
              <FaRegEyeSlash color="gray" size={16} />
            )}
          </span>
        </div>
        {props.err && props.userData.password.trim() == "" ? (
          <p className="text-red-700 text-sm">This field Should not be empty</p>
        ) : null}
        {props.err &&
        props.userData.password.length < 5 &&
        props.userData.password.length > 0 ? (
          <p className="text-red-700 text-sm">
            Password must contain 5 letters
          </p>
        ) : null}
        <p className="text-blue-700 text-sm font-semibold m-2">
          7-16 characters starts with Alphabets, then Numbers OR Special
          Characters!@#%^$
        </p>
        <button className="bg-orange-400 text-white p-2 w-full cursor-pointer rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
