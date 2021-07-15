import React, { useState } from "react";
import Translate from "./Translate";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Route from "./Route";
import Header from "./Header";
const Items = [
  { title: "What is React", content: "frontend framework" },
  { title: "What is apple", content: "it is a fruit. not tasty" },
  { title: "What is mobile", content: "it is a communication device" },
];
const options = [
  {
    label: "Hey Red",
    value: "red",
  },
  {
    label: "shady Blue",
    value: "blue",
  },
  {
    label: "evergreeen",
    value: "green",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={Items} />
      </Route>
      <Route path="/List">
        <Search />
      </Route>
      <Route path="/Dropdown">
        <div
          className="ui button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Toggle Dropdown
        </div>
        {showDropdown ? (
          <Dropdown
            Selected={selected}
            onSelectedChange={setSelected}
            Options={options}
          />
        ) : null}
      </Route>
      <Route path="/Translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
