import { ChangeEvent, useState } from "react";
import { getSuggestions } from "../../utils/autocompleteutil";

export const SearchBox = () => {
  const [value, setValue] = useState("");
  const [values, setValues] = useState<string[]>([]);
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
    if (e.target.value === "") {
      console.log(e.target.value + "&&");
      setValues([]);
    } else {
      const resp = await getSuggestions(e.target.value);
      setValues(resp);
    }
  };

  return (
    <div style={{ width: "50vh" }}>
      <input value={value} onChange={(e) => handleChange(e)}></input>
      {values.map((item) => (
        <section
          style={{ border: "1px solid black" }}
          onClick={() => {
            setValues([]);
            setValue(item);
          }}
        >
          {item}
        </section>
      ))}
    </div>
  );
};
