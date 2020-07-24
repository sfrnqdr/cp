import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import EntryItem from "../EntryItem/EntryItem";
import EntryForm from "../EntryForm/EntryForm";

import "./EntryList.scss";

const EntryList = (props) => {
  const [editState, setEditState] = useState(false);
  const [entryList, setEntryList] = useState(props.data);

  const handleEntryListMode = (isEditMode) => {
    setEditState(isEditMode);
  };

  const handleEntryCreate = (entry) => {
    entry.id = entryList.length + 1;
    const newEntryList = [...entryList, entry];
    setEntryList(newEntryList);
    handleEntryListMode(false);
  };

  const handleEntryDelete = (entry) => {
    const newState = entryList.filter(function (el) {
      return el.id != entry.id;
    });
    setEntryList(() => newState);
  };

  const handleEntryUpdate = (entry) => {
    const newState = [...entryList];
    console.log(newState);
    console.log(entry);
    const objIndex = newState.findIndex((obj) => obj.id == entry.id);
    newState[objIndex] = entry;
    setEntryList(() => newState);
  };

  const editComponent = (
    <div className="EntryListEdit">
      <EntryForm
        entry={{}}
        handleEntryListMode={handleEntryListMode}
        handleEntryCreate={handleEntryCreate}
      />
    </div>
  );

  const viewComponent = (
    <div className="EntryListView">
      <Button
        class="EntryListViewButton"
        onClick={() => handleEntryListMode(true)}
      >
        + Praxiserfahrung hinzufügen
      </Button>
    </div>
  );

  return (
    <div>
      <h3 className="EntryItemViewHeading">Praxiserfahrungen</h3>

      {entryList.map((entry) => {
        return (
          <EntryItem
            key={entry.id}
            entry={entry}
            handleEntryUpdate={handleEntryUpdate}
            handleEntryDelete={handleEntryDelete}
            handleEntryCreate={handleEntryCreate}
          />
        );
      })}
      {editState ? editComponent : viewComponent}
    </div>
  );
};

export default EntryList;
