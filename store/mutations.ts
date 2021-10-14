import { State, generateInitialState } from './state';

export default {
  RESET_STORE: (state: State) => {
    Object.assign(state, generateInitialState());
  },

  setAppReady: (state: State, appReady: boolean) => {
    state.appReady = appReady;
  },
};
