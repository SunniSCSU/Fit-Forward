import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Form from "react-bootstrap/Form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { AuthContext } from "../utils/AuthContext";

const Styles = styled.div`
  .text-field {
    margin-bottom: 15px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  margin-left: 5em;
  button {
    margin-top: 15px;
  }
`;

const ActivityForm = () => {
  const { isAuth } = useContext(AuthContext);
  const [activity, setActivity] = useState("");
  const [minutes, setMinutes] = useState("");
  const [mets, setMets] = useState("");
  const history = useHistory();

  const addActivity = () => {
    axios
      .post(
        "http://localhost:3001/addactivity",
        {
          activityName: activity,
          minutesPerformed: minutes,
          mets: mets,
          caloriesBurned: Math.round(
            ((mets * 3.5 * isAuth.weight) / 200) * minutes
          ),
          UserId: isAuth.id,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          history.push("/dashboard");
        }
      });
  };

  return (
    <Styles>
      <TextField
        fullWidth
        className="text-field"
        id="activity"
        label="Activity"
        variant="outlined"
        onChange={(event) => {
          setActivity(event.target.value);
        }}
      />
      <TextField
        fullWidth
        className="text-field"
        id="minutes"
        label="Minutes"
        variant="outlined"
        value={minutes}
        onChange={(event) => {
          setMinutes(event.target.value);
        }}
      />
      <TextField
        fullWidth
        className="text-field"
        id="mets"
        label="METs"
        variant="outlined"
        value={mets}
        onChange={(event) => {
          setMets(event.target.value);
        }}
      />

      {/* <input
        type="text"
        placeholder="Activity"
        autoComplete="off"
        value={activity}
        onChange={(event) => {
          setActivity(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Minutes"
        autoComplete="off"
        value={minutes}
        onChange={(event) => {
          setMinutes(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="METs"
        autoComplete="off"
        value={mets}
        onChange={(event) => {
          setMets(event.target.value);
        }}
      /> */}
      <Button
        color="secondary"
        variant="contained"
        fullWidth
        type="submit"
        onClick={addActivity}
      >
        {" "}
        Submit
      </Button>
    </Styles>
  );
};

export default ActivityForm;
