import React, { useState } from "react";
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

function FluentFood(props) {
  const { meals, addMealPerson } = props;

  return (
    <>
      <div className="aed-qty-tab">
        <table>
          <tbody>
            {meals?.map((item, id) => (
              <tr>
                <td style={{ width: "50%" }}>
                  <span className="title">{item.value}</span>
                </td>
                <td>
                  <AedQuantityInput
                    name={item?.person * item?.price + " AED"}
                    value={item?.person}
                    subClick={() => addMealPerson(id, true, item)}
                    addClick={() => addMealPerson(id, false, item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FluentFood;
