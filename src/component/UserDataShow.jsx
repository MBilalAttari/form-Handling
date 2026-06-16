import React from "react";

const UserDataShow = (props) => {
  return (
    <div
      style={{ display: props.display[1] }}
      className={`flex flex-col justify-around items-center w-full h-[50%] slideRight`}
    >
      <h2 className="text-2xl font-bold ">
        Wellcome {props.userData.firstName} {props.userData.lastName}!
      </h2>
      <div className="flex flex-col gap-2">
        <h3>
          <strong>Your First Name is : </strong>
          {props.userData.firstName}
        </h3>
        <h3>
          <strong>Your Last Name is : </strong>
          {props.userData.lastName}
        </h3>
        <h3>
          <strong>Your Mobile No is : </strong>
          {props.userData.mobileNo}
        </h3>
        <h3>
          <strong>Your Email is :</strong> {props.userData.email}
        </h3>
        <h3>
          <strong>Your password is :</strong> {props.userData.password}
        </h3>
      </div>
      <button
        className="bg-orange-400 p-2 rounded w-1/2 cursor-pointer font-bold text-white"
        onClick={props.returnBtn}
      >
        Back
      </button>
    </div>
  );
};

export default UserDataShow;
