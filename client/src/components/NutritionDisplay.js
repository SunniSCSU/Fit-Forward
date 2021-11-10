import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

import Grid from "@material-ui/core/Grid";
import { FaUtensils } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { DisplayStyles } from "../UI/Card.js";

const NutritionDisplay = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <DisplayStyles className="display">
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <span>
              <p>
                Logged
                <p className="number-small">-</p> Calories
              </p>
            </span>
          </Grid>
          <Grid item sm={6}>
            <span>
              <p>
                Your Goal
                <p className="number-small">{isAuth.targetCalories}</p> Calories
              </p>
            </span>
          </Grid>
        </Grid>
      </DisplayStyles>
      <DisplayStyles className="display">
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <p>
              Protein
              <p className="number-small">-</p>
            </p>
          </Grid>
          <Grid item sm={4}>
            <p>
              Carbs
              <p className="number-small">-</p>
            </p>
          </Grid>
          <Grid item sm={4}>
            <p>
              Fats
              <p className="number-small">-</p>
            </p>
          </Grid>
        </Grid>
      </DisplayStyles>
      <DisplayStyles className="display">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Link to={`dashboard/addfood`}>
              <FaUtensils className="icon" />
              Add Food
            </Link>
          </Grid>
          <Grid item sm={12}>
            <Link to={`dashboard/addactivity`}>
              <FaRunning className="icon" />
              Add Activity
            </Link>
          </Grid>
        </Grid>
      </DisplayStyles>
    </>
  );
};

export default NutritionDisplay;
