import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import PersonInfo from "../../components/PersonInfo/PersonInfo";
import EntryList from "../../components/EntryList/EntryList";

import "./Resume.scss";

const Resume = (props) => {
  const [personInfo, setPersonInfo] = useState({
    name: "Safran Quader",
    country: "Deutschhland",
    phone: "+49 1517 - 2351088",
    mail: "safran.quader@gmail.com",
  });
  const [expList, setExpList] = useState([
    {
      id: 1,
      jobDescription: "Frontend Developer",
      jobType: "Vollzeit",
      from: "Mai 2017",
      to: "Januar 2020",
      company: "Campusjäger",
      website: "www.campusjäger.de",
      location: "Karlsruhe",
      jobExperience: "Ausschließlich lustige Erfahrungen",
    },
    {
      id: 2,
      jobDescription: "Backend Developer",
      jobType: "Vollzeit",
      from: "Mai 2013",
      to: "Januar 2016",
      company: "Campusjäger",
      website: "www.campusjäger.de",
      location: "Karlsruhe",
      jobExperience: "Ausschließlich coole Erfahrungen",
    },
  ]);

  return (
    <div className="CjResumeRoot">
      <PersonInfo {...personInfo} />
      <EntryList data={expList} person={personInfo} />
    </div>
  );
};

export default Resume;
