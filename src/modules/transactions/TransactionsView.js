import React, { PropTypes, Component } from "react";
import { Button, View, StyleSheet } from "react-native";
const { func } = React.PropTypes;

import Icon from "react-native-vector-icons/MaterialIcons";

class TransactionsView extends Component {
  // static displayName = "ColorView";

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
    transactions: []
  };

  buttonPress() {
    console.log("moro");
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Button
          title="Navigate to ViewSingleTransaction"
          onPress={this.buttonPress}
        />
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
