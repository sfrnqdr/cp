import React from "react";

import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import "./PersonInfo.scss";

function PersonInfo(props) {
  return (
    <div className="CjPersonInfoRoot">
      <div className="CjPersonInfoHead">
        <div className="CjPersonInfoImage">
          <img
            class="photo-upload__img"
            src="https://s3-eu-west-1.amazonaws.com/static.campusjaeger.de/candidate/photo/178503/20/99/56/178503-200615223130.jpg"
          ></img>
        </div>
        <div className="CjPersonInfoName">
          <p>{props.name}</p>
        </div>
      </div>
      <div className="CjPersonInfoCountry">
        <PublicIcon style={{ fontSize: 16 }} />
        <p>{props.country}</p>
      </div>
      <div className="CjPersonInfoPhone">
        <PhoneIcon style={{ fontSize: 16 }} />
        <p>{props.phone}</p>
      </div>
      <div className="CjPersonInfoMail">
        <MailIcon style={{ fontSize: 16 }} />
        <p>{props.mail}</p>
      </div>
    </div>
  );
}

export default PersonInfo;
