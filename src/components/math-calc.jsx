import React, { Component } from "react";
import { alpha, Button, Grid, TextField } from "@material-ui/core";
import Latex from "react-latex";
class MathCalculator extends Component {
  state = {
    value: "",
  };
  onClickAlpha = () => {
    this.setState({ value: `${alpha}` });
  };
  render() {
    const alpha = <Latex>$\alpha$</Latex>;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Type your Inputs here"
            variant="outlined"
            value={this.state.value}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            style={{ textTransform: "lowercase" }}
            onClick={this.onClickAlpha}
          >
            {alpha}
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default MathCalculator;
