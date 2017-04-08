import React, { PropTypes, Component } from "react";
import { Button, View, StyleSheet } from "react-native";

// import Icon from "react-native-vector-icons/MaterialIcons";

// const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
class SingleTransactionView extends Component {
  // static displayName = "ColorView";

  static navigationOptions = {
    title: "Single Transaction",
    header: {
      tintColor: "white",
      style: {
        backgroundColor: "#39babd"
      }
    }
  };

  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      // background: `rgba(${color()},${color()},${color()}, 1)`
    };
  }

  open = () => {
    this.props.navigate({ routeName: "InfiniteColorStack" });
  };

  render() {
    return (
      <View style={[styles.container]}>
        <Button title="SingleTransactionView" onPress={this.open} />
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

export default SingleTransactionView;
