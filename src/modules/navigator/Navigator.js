import { Platform } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import CounterViewContainer from "../counter/CounterViewContainer";
import ColorViewContainer from "../colors/ColorViewContainer";
import TransactionsViewContainer
  from "../transactions/TransactionsViewContainer";
import SingleTransactionViewContainer
  from "../transactions/SingleTransactionViewContainer";

const headerColor = "#39babd";
const activeColor = "white";

// TabNavigator is nested inside StackNavigator
export const MainScreen = TabNavigator(
  {
    Counter: { screen: CounterViewContainer },
    Color: { screen: ColorViewContainer },
    Transactions: { screen: TransactionsViewContainer }
  },
  {
    tabBarOptions: {
      ...Platform.select({
        android: {
          activeTintColor: activeColor,
          indicatorStyle: { backgroundColor: activeColor },
          style: { backgroundColor: headerColor }
        }
      })
    }
  }
);

MainScreen.navigationOptions = {
  // title: "MainScreen Title",
  header: {
    titleStyle: { color: "white" },
    style: {
      backgroundColor: headerColor,
      elevation: 0 // disable header elevation when TabNavigator visible
    }
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: { screen: MainScreen },
  InfiniteColorStack: { screen: ColorViewContainer },
  SingleTransactionView: { screen: SingleTransactionViewContainer }
});

export default AppNavigator;
