import React, { Fragment, useContext } from "react";
import { Store } from "../src/Store";

interface IState {
  episodes: [];
  favorites: [];
}

interface IAction {
  type: string;
  payload?: any;
}

export default function Something(
  state: IState,
  dispatch: React.Dispatch<IAction>
): JSX.Element {
  const fetchDataAction = async () => {
    const data = await fetch("URL");
    const dataJSON = await data.json();
    return dispatch({ type: "FETCH_DATA", payload: dataJSON });
  };

  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </Fragment>
  );
}
