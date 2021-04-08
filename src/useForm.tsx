import React, { useState } from "react";

interface IFormProps<T> {
  firstAddend: T;
  secondAddend: T;
  thirdAddend?: T;
}

type FormHook = {
  inputs: IFormProps<string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function useForm(initial: IFormProps<string>): FormHook {
  const [inputs, setInputs] = useState<IFormProps<string>>(initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return { inputs, handleChange };
}
