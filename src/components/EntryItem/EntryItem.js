import React, { useState } from "react";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import PinDropRoundedIcon from "@material-ui/icons/PinDropRounded";

import EntryForm from "../EntryForm/EntryForm";

import "./EntryItem.scss";

const EntryItem = (props) => {
  const [editState, setEditState] = useState(true);
  const handleEntryItemMode = (isEditMode) => {
    setEditState(isEditMode);
  };

  const editComponent = (
    <div className="EntryItemEdit">
      <EntryForm
        entry={props.entry}
        handleEntryItemMode={handleEntryItemMode}
        handleEntryCreate={props.handleEntryCreate}
        handleEntryDelete={props.handleEntryDelete}
        handleEntryUpdate={props.handleEntryUpdate}
      />
    </div>
  );

  const viewComponent = (
    <div className="EntryItemView" onClick={() => handleEntryItemMode(true)}>
      <div className="EntryItemViewTitle">
        <span>{props.entry.jobDescription} </span>
        <span>({props.entry.jobType}) </span>
        <span>• {props.entry.company}</span>
      </div>
      <div className="EntryItemViewMeta">
        <EventRoundedIcon className="entryIcon" style={{ fontSize: 16 }} />
        <span>{props.entry.from}</span>
        <span>{props.entry.to}</span>
        <PinDropRoundedIcon
          className="entryIcon entryIconSecond"
          style={{ fontSize: 16 }}
        />

        <span>{props.entry.location}</span>
      </div>
      <div className="EntryItemViewContent">
        <span>{props.entry.jobExperience}</span>
      </div>
    </div>
  );

  return <>{editState ? editComponent : viewComponent}</>;
};

export default EntryItem;
