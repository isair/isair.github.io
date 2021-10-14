export interface State {
  appReady: boolean;
}

export const generateInitialState = (): State => ({
  appReady: false,
});

export default generateInitialState;
