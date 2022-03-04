import React, { useState } from "react";
import ReactJson from "react-json-view";
import styled from "styled-components";
import { database } from "./Data";
import { Main } from "./functions";

function Sandbox() {
  const [liveData, setLiveData] = useState(database);

  const update = (setState) => {
    var data_dupe = liveData;
    setState(Main(data_dupe));
  };
  return (
    <div style={{ marginLeft: "30px" }}>
      <Button
        onClick={() => {
          update(setLiveData);
        }}
      >
        RUN TEST
      </Button>
      <ReactJson src={database} />
    </div>
  );
}

export default Sandbox;

const Button = styled.div`
  padding: 15px;
  margin: 15px;
  width: 120px;
  border-radius: 10px;
  background-color: #125c8d;
  color: white;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 0;
`;
