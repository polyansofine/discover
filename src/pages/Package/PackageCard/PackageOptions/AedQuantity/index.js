import { useState } from "react";
import { PlusIcon, SubIcon } from "../../../../../components/SvgComponents";

function AedQuantityInput(props) {
  const { name } = props;

  const [stateValue, setStateValue] = useState(0);

  return (
    <div className="render-input">
      <span className="name">{name}</span>
      <div className="handler">
        <button onClick={() => setStateValue(stateValue - 1)}>
          <SubIcon />
        </button>
        <span className="value">{stateValue}</span>
        <button className="add" onClick={() => setStateValue(stateValue + 1)}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}

export default function AedQuantity() {
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th className="text-center">Adult</th>
            <th className="text-center">Child</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, adultAed, childAed }) => (
            <tr>
              <td>
                <span className="title">{name}</span>
              </td>
              <td>
                <AedQuantityInput name={adultAed + " AED"} />
              </td>
              <td>
                <AedQuantityInput name={childAed + " AED"} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
