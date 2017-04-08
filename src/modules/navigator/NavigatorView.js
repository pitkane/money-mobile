import React, { PropTypes, Component } from "react";
import { addNavigationHelpers } from "react-navigation";
const { number, string, func } = React.PropTypes;

import AppNavigator from "./Navigator";

class NavigatorView extends Component {
  static displayName = "NavigationView";

  static propTypes = {
    dispatch: func,
    navigatorState: PropTypes.shape({
      index: number,
      routes: PropTypes.arrayOf(
        PropTypes.shape({
          key: string,
          routeName: string
        })
      )
    }).isRequired
  };

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigatorState
        })}
      />
    );
  }
}

export default NavigatorView;
