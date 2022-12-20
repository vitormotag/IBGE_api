import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../src/App";

describe("initial render", () => {
  const initialState = {
    IBGE: {
      loading: false,
      allStates: [],
      allCities: [],
      districts: [],
    },
  };

  const mockStore = configureStore();
  it("show text", () => {
    const store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText("API Localidades - IBGE")).not.toBeNull();
  });
});
