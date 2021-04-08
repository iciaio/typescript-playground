import React, { PropsWithChildren, ReactElement } from "react";

interface IProps {
  name: string;
}

export function HeaderWrapper(
  props: PropsWithChildren<IProps>
): ReactElement<PropsWithChildren<IProps>> {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
}
