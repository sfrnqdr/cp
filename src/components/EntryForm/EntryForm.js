import React, { useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./EntryForm.scss";

const EntryForm = (props) => {
  const [entry, setEntry] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      id: props.entry.id,
      jobDescription: props.entry.jobDescription,
      jobType: props.entry.jobType,
      from: props.entry.from,
      to: props.entry.to,
      company: props.entry.company,
      website: props.entry.website,
      location: props.entry.location,
      jobExperience: props.entry.jobExperience,
    }
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEntry({ [name]: value });
  };

  return (
    <div className="EntryForm">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            onChange={(event) => handleInputChange(event)}
            name="jobDescription"
            label="Stellenbezeichnung"
            value={entry.jobDescription}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(event) => handleInputChange(event)}
            name="jobType"
            label="Beschäftigungsart"
            value={entry.jobType}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(event) => handleInputChange(event)}
            name="from"
            label="Von"
            value={entry.from}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(event) => handleInputChange(event)}
            name="to"
            label="Bis"
            value={entry.to}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(event) => handleInputChange(event)}
            name="company"
            label="Unternehmen"
            value={entry.company}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(event) => handleInputChange(event)}
            name="website"
            label="Website"
            value={entry.website}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(event) => handleInputChange(event)}
            name="location"
            label="Standort"
            value={entry.location}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(event) => handleInputChange(event)}
            name="jobExperience"
            label="Beschreibung der Praxiserfahrung(optional)"
            value={entry.jobExperience}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          {typeof entry.id !== "undefined" && (
            <Button
              onClick={() => {
                props.handleEntryDelete(entry);
              }}
            >
              Löschen
            </Button>
          )}
          {typeof entry.id !== "undefined" ? (
            <Button
              onClick={() => {
                props.handleEntryItemMode(false);
              }}
            >
              Abbrechen
            </Button>
          ) : (
            <Button
              onClick={() => {
                props.handleEntryListMode(false);
              }}
            >
              Abbrechen
            </Button>
          )}
          {typeof entry.id !== "undefined" ? (
            <Button
              onClick={() => {
                props.handleEntryUpdate(entry);
              }}
            >
              Speichern
            </Button>
          ) : (
            <Button
              onClick={() => {
                props.handleEntryCreate(entry);
              }}
            >
              Speichern
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default EntryForm;
