import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

export const withRedux = (PageComponent) => {
  const WithRedux = ({ ...props }) => {
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    WithRedux.displayName = `withRedux(${displayName})`;
  }

  return WithRedux;
};
