import React from "react";

function Avatar(props) {
    return (
        <img 
            className="circle-img"
            src={props.imgsend}
            alt="avatar_img"
        />
  );
}

export default Avatar;