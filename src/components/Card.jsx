import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";


function Card(props) {
    return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgsend={props.img} />
      </div>
      <div className="bottom">
        <UserInfo info = {props.tel} />
        <UserInfo info = {props.email} />
      </div>
    </div>
    );
}

export default Card;