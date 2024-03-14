import { useState } from "react";

function Question() {
  // stores the
  const [country, setCountry] = useState([]);

  let countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Ghaziabad", "Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PK",
      cities: ["Lahore", "Karanchi"],
    },
    {
      name: "Bangladesh",
      value: "bg",
      cities: ["Dhaka", "Chittgong"],
    },
  ];
  return (
    <>
      <h2>Questions</h2>
      <div className="center_div">
        <table>
          <thead>
            <tr>
              <th>States</th>
              <th>Values</th>
              <th>Cities</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.state}</td>
                  <td>{e.value}</td>
                  <td>{e.cities.join("  ")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <select
            value={country}
            onChange={(e) => {
              console.log(e.target.value);
              setCountry([e.target.value]);
            }}
          >
            {countries.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.name}
                </option>
              );
            })}
          </select>

          {/* 2nd DropDown */}

          <select>
            {countries[country] &&  countries[country].cities.map((item, index) => {
                return <option value={index}>{item}</option>;
              })}
          </select>
        </div>
      </div>
    </>
  );
}

export default Question;
