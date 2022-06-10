import React, { useState, Fragment, useEffect } from "react";
import { PlusIcon, SubIcon } from "../../SvgComponents";

function AedQuantityInput(props) {
  const { name, value, subClick = () => {}, addClick = () => {} } = props;

  return (
    <div className="render-input">
      <span className="name">{name}</span>
      <div className="handler">
        <button onClick={subClick}>
          <SubIcon />
        </button>
        <span className="value">{value}</span>
        <button className="add" onClick={addClick}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}

const SubPackages = (props) => {
  const { addSubAdult, addSubChild, subPackages } = props;
  const items = [
    {
      name: "Add a Buggy",
      adultAed: 125,
      childAed: 75,
    },
    {
      name: "Add a Safari Sunset",
      adultAed: 130,
      childAed: 90,
    },
    {
      name: "Add a Horse Hack",
      adultAed: 75,
      childAed: 75,
    },
    {
      name: "Add Trekking",
      adultAed: 50,
      childAed: 30,
    },
  ];
  return (
    <div className="aed-qty-tab">
      <table className="adult-child">
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="text-center">Adult</th>
            <th className="text-center">Child</th>
          </tr>
        </thead>
        <tbody>
          {subPackages?.map((item, id) => (
            <>
              {item?.adult_price > 0 && item?.child_price > 0 && (
                <tr>
                  <td>
                    <span className="title">{item.value}</span>
                  </td>
                  <td>
                    <AedQuantityInput
                      name={item?.adult_person * item?.adult_price + " AED"}
                      value={item?.adult_person}
                      subClick={() => addSubAdult(id, true, item)}
                      addClick={() => addSubAdult(id, false, item)}
                    />
                  </td>
                  <td>
                    <AedQuantityInput
                      name={item?.child_person * item?.child_price + " AED"}
                      value={item?.child_person}
                      subClick={() => addSubChild(id, true, item)}
                      addClick={() => addSubChild(id, false, item)}
                    />
                  </td>
                </tr>
              )}
              {item?.adult_price > 0 && item?.child_price <= 0 && (
                <tr>
                  <td>
                    <span className="title">{item.value}</span>
                  </td>
                  <td>
                    <AedQuantityInput
                      name={item?.adult_person * item?.adult_price + " AED"}
                      value={item?.adult_person}
                      subClick={() => addSubAdult(id, true, item)}
                      addClick={() => addSubAdult(id, false, item)}
                    />
                  </td>
                  <td></td>
                </tr>
              )}
              {item?.adult_price <= 0 && item?.child_price > 0 && (
                <tr>
                  <td>
                    <span className="title">{item.value}</span>
                  </td>
                  <td></td>
                  <td>
                    <AedQuantityInput
                      name={item?.child_person * item?.child_price + " AED"}
                      value={item?.child_person}
                      subClick={() => addSubChild(id, true, item)}
                      addClick={() => addSubChild(id, false, item)}
                    />
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubPackages;
