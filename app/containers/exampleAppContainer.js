'use strict';

import React, { Component, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class ExampleAppContainer extends Component {
  constructor(props) {
    super(props)
  }
  pressIt(e) {
    let {state, actions} = this.props
    actions.random()
  }
  render() {
    const {random, actions} = this.props
    let messageText
    if (random === 0) {
      messageText = "Tap the dice to roll"
    } else {
      messageText = "You rolled a " + random
    }
    return (
      <View style={styles.container}>
        <Text style={styles.rollText}>
          Dice Roller
        </Text>
        <TouchableOpacity
          onPress={this.pressIt.bind(this)}
          activeOpacity={0.2}>
          <Image source={require('../assets/images/d20.png')} />
        </TouchableOpacity>
        <Text style={styles.rollText}>
          {messageText}
        </Text>
      </View>
      )
  }
}

// React native uses stylesheets to add styling, check the documentation for supported CSS properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  rollText: {
    fontSize: 25
  }
})


function mapStateToProps(state) {
  return {
    random: state.ExampleReducer.random
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExampleAppContainer);