import React, { useState } from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from "@material-ui/core";
import { FormGroup, Input, Label } from "reactstrap";

function RadioInput({
  checked = false,
  value,
  lable,
  name,
  onClick = () => {},
  onChange = () => {},
}) {
  return (
    <div className="theme-radio">
      <FormGroup check>
        <Label check onClick={onClick}>
          <Input checked={checked} type="radio" name={name} />
          <span />
          {lable}
        </Label>
      </FormGroup>
    </div>
  );
}

function Transport(props) {
  const { transports, transport_id, isOneWay, checkTransport, setTransportID } = props;

  return (
    <>
      <div className="car-tab">
        <div
        //  style={{  minHeight: 200, maxHeight: 300, overflowY: "auto" }}
        >
          <div className="package-detail">
            <h6
              className="text-center"
              onClick={() => {
                checkTransport(null, false);
              }}
            >
              No Transport Required
            </h6>
          </div>
          <table>
            <thead>
              <tr>
                <th className="title"  onClick={() => {
                checkTransport(null, false);
              }}>Click to Un-Select</th>
                <th>One Way</th>
                <th>Two Way</th>
              </tr>
            </thead>
            <tbody>
              {transports.map((item, id) => {
                const { value, one_way, two_way } = item;

                return (
                  <tr>
                    <td>
                      <span className="name">{value}</span>
                    </td>
                    <td>
                      <RadioInput
                        name="transports"
                        checked={isOneWay == true && transport_id == item?.id}
                        onClick={() => {
                          checkTransport(item, true);
                        }}
                        lable={one_way}
                      />
                    </td>
                    <td>
                      <RadioInput
                        name="transports"
                        checked={isOneWay == false && transport_id == item?.id}
                        onClick={() => {
                          checkTransport(item, false);
                        }}
                        lable={two_way}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Transport;
