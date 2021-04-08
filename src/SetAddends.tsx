import React, { ReactElement, useEffect, useState } from "react";
import useForm from "../src/useForm";

export default function SetAddends(): ReactElement<{}> {
  const { inputs, handleChange } = useForm({
    firstAddend: "0",
    secondAddend: "0",
  });
  const [sum, setSum] = useState<number>(0);

    useEffect(() => {
      const sum = parseInt(inputs?.firstAddend) +
      parseInt(inputs?.secondAddend) +
      parseInt(inputs.thirdAddend ?? "0");
        setSum(sum);
    }, [inputs]);

//   const calculateSum = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const sum =
//       parseInt(inputs?.firstAddend) +
//       parseInt(inputs?.secondAddend) +
//       parseInt(inputs.thirdAddend ? inputs.thirdAddend : "0");
//     setSum(sum);
//   };

  return (
    <form>
      <label htmlFor="first addend">
        <input
          type="text"
          id="firstAddend"
          name="firstAddend"
          value={inputs.firstAddend}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="second addend">
        <input
          type="text"
          id="secondAddend"
          name="secondAddend"
          value={inputs.secondAddend}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="third addend">
        <input
          type="text"
          id="thirdAddend"
          name="thirdAddend"
          value={inputs.thirdAddend}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
      <p>{sum}</p>
    </form>
  );
}
