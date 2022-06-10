import RadioInput from "../../../../../components/banners/RadioInput";

export default function Car() {
  const items = [
    {
      name: "Transportation from Dubai (inner city)",
      oneWay: 155,
      twoWay: 310,
    },
    {
      name: "Transportation from Dubai (outer city)",
      oneWay: 187.5,
      twoWay: 375,
    },
    {
      name: "Transportation from Sharjah",
      oneWay: 60,
      twoWay: 120,
    },
    {
      name: "Transportation from Ajman",
      oneWay: 110,
      twoWay: 220,
    },
    {
      name: "Transportation from Ras Al Khaimah",
      oneWay: 250,
      twoWay: 500,
    },
    {
      name: "Transportation from Umm Al Quwain",
      oneWay: 175,
      twoWay: 350,
    },
    {
      name: "Transportation from Abu Dhabi",
      oneWay: 375,
      twoWay: 650,
    },
    {
      name: "Transportation from Eastern Region (Fujairah/Khorfakkan)",
      oneWay: 250,
      twoWay: 500,
    },
  ];

  return (
    <div className="car-tab">
      <table>
        <thead>
          <tr>
            <th className="title">Click to Un-Select</th>
            <th>One Way</th>
            <th>Two Way</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, oneWay, twoWay }) => (
            <tr>
              <td>
                <span className="name">{name}</span>
              </td>
              <td>
                <RadioInput name="carWay" lable={oneWay} />
              </td>
              <td>
                <RadioInput name="carWay" lable={twoWay} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
