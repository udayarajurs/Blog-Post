import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreens from "./src/screens/ShowScreens";
import CreateScreens from "./src/screens/CreateScreens";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreens,
    Create: CreateScreens
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Index",
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
}

