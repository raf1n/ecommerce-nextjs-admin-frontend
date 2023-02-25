import { state, action, createStore } from "usm-redux";
import { compose } from "redux";
import { IOrder } from "../../interfaces/models";

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Speciffy extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

export interface IStates {
  counter: number;
  orders: Array<IOrder>;
}

export class Controller {
  @state
  states: IStates = {
    counter: 0,
    orders: [],
  };

  @action
  setState(states: Partial<IStates>) {
    this.states = {
      ...this.states,
      ...states,
    };
  }

  @action
  setOrders(order: IOrder[]) {
    this.states.orders = order;
  }

  // @action
  // increase() {
  //     this.states.counter += 1;
  // }

  // @action
  // decrease() {
  //     this.states.counter -= 1;
  // }
}

export const controller = new Controller();

export const store = createStore(
  {
    modules: [controller],
  },
  undefined,
  {
    reduxEnhancer: composeEnhancers(),
  }
);
