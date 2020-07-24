import React from "react";
import EntryList from "./components/EntryList/EntryList";

function App() {
  const entries = [
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
  ];

  const personInfo = {
    name: "Safran Quader",
    country: "Deutschhland",
    phone: "+49 1517 - 2351088",
    mail: "safran.quader@gmail.com",
  };

  return (
    <div className="App">
      <EntryList data={entries} person={personInfo} />
    </div>
  );
}

export default App;
