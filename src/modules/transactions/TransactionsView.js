import React, { Component } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
const { func } = React.PropTypes;

import { MoneyApi } from "../../utils/MoneyApi";
import Icon from "react-native-vector-icons/MaterialIcons";

const moneyApi = new MoneyApi();

class TransactionsView extends Component {
  static navigationOptions = {
    title: "Waat",
    tabBar: {
      label: "TransactioTabTitle",
      icon: props => (
        <Icon name="color-lens" size={24} color={props.tintColor} />
      )
    }
  };

  static propTypes = {
    navigate: func
  };

  state = {
    loading: false,
    transactions: []
  };

  buttonPress = () => {
    // console.log("moro");
    console.log(this.props);
    this.props.navigate({ routeName: "SingleTransactionView" });
    // this.props.navigate("SingleTransactionView");
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await moneyApi.fetchTransactions();
    this.setState({ loading: false, transactions: data });
    console.log(this.state);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Button
          title="Navigate to ViewSingleTransaction"
          onPress={this.buttonPress}
        />

        {this.state.transactions.map((transaction, i) => {
          return <Text key={i}>{transaction.memo}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TransactionsView;
