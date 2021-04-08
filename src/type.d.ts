interface ITodo {
  id: number;
  title: string;
  status: boolean;
}

type ContextType = {
  state: IState;
  dispatch: React.Dispatch<IAction>;
};

type IState = ITodo[];

type IAction = {
  payload?: any;
  type: string;
};
