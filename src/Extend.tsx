import React, { Component, ReactElement } from "react";

interface IProps<T> {
  firstAddend: T;
  secondAddend: T;
  thirdAddend?: T;
}

type State<T> = {
  result: T;
};

export function AddNumbers(props: IProps<number>): JSX.Element {
  return <div>{props.firstAddend + props.secondAddend}</div>;
}

export function AddStrings(
  props: IProps<string>
): ReactElement<IProps<string>> {
  return <div>{props.firstAddend + props.secondAddend}</div>;
}

export const AddBooleans: React.FC<IProps<boolean>> = (
  props: IProps<boolean>
) => {
  const result = (props.firstAddend && props.secondAddend).toString();
  return <div>{result}</div>;
};

export class AddStringArrays extends Component<
  IProps<string[]>,
  State<string[]>
> {
  constructor(props: IProps<string[]>) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount(): void {
    const result = this.props.firstAddend.concat(this.props.secondAddend);
    this.setState({ result });
  }

  render() {
    return <div>{this.state.result.toString()}</div>;
  }
}
