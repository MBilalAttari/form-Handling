import React, { useState } from "react";
import Form from "./Form";
import Swal from "sweetalert2";
import UserDataShow from "./UserDataShow";

const Mainpage = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);
  const [display, setDisplay] = useState(["", "none"]);
  const [typeChange, setTypeChange] = useState(["password", true]);

  const handleForm = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(userData));

    const storageData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData.firstName.trim() == "" ||
      userData.lastName.trim() == "" ||
      userData.mobileNo.trim() == "" ||
      userData.email.trim() == "" ||
      userData.password.trim() == ""
    ) {
      setErr(true);
    } else if (userData.password.length < 5) {
      setErr(true);
    } else {
      setUserData(storageData);

      setDisplay(["none", "flex"]);
      setErr(false);
      Swal.fire({
        title: "Submit",
        icon: "success",
        text: "Your form is Successfully Subimted",
        draggable: true,
      });
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const returnBtn = () => {
    setDisplay(["flex", "none"]);
  };

  const handleTypeChange = () => {
    if (typeChange[1]) {
      setTypeChange(["text", false]);
    } else {
      setTypeChange(["password", true]);
    }
  };

  return (
    <div className="flex flex-col items-start justify-center h-full w-1/2">
      <Form
        handleForm={handleForm}
        userData={userData}
        display={display}
        typeChange={typeChange}
        handleChange={handleChange}
        handleTypeChange={handleTypeChange}
        err={err}
      />

      <UserDataShow
        userData={userData}
        returnBtn={returnBtn}
        display={display}
      />
    </div>
  );
};

export default Mainpage;
