import React from "react";
import {MDBCardTitle} from "mdb-react-ui-kit";

const Loader = ({ styles }) => (
  <MDBCardTitle style={styles}>
    <div className="loader" style={{ margin: "auto" }} />
  </MDBCardTitle>
);

export default Loader;
