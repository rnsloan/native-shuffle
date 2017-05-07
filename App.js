import React from 'react';
import { StyleSheet, View, Text, TextInput, Platform } from 'react-native';
import List from './components/List';
import { shuffle } from './utilities';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: []
    };
  }

  clearText() {
    this._textInput.setNativeProps({text: ''});
  }

  generateRandomOrder(input) {
    let seed = Number(input);
    const numArray = [];
    while(seed > 0) {
      numArray.push(seed);
      seed--;
    }
    const shuffled = shuffle(numArray);
    this.setState({numbers: shuffled});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter Number:</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            ref={component => this._textInput = component}
            style={styles.input}
            autoFocus={true}
            keyboardType='numeric'
            onSubmitEditing={(event) => this.generateRandomOrder(event.nativeEvent.text)}
            onFocus={(event) => this.clearText()}
          />
        </View>
        <List numbers={this.state.numbers} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
    backgroundColor: '#fff',
  },
  inputWrapper: {
    borderBottomWidth: (Platform.OS === 'ios') ? 1 : 0,
    marginBottom: (Platform.OS === 'ios') ? 5 : 0,
    width: '100%',
  },
  input: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    height: 48,
  },
});
