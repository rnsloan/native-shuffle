import React from 'react';
import {StyleSheet, ListView, View, Text} from 'react-native';

export default class List extends React.Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  renderRow(rowData, sectionID, rowID) {
    const colors = ['#e5efff', '#fcfdff'];
    const style = {'backgroundColor': colors[rowID % colors.length]};

    return (
      <View style={style}>
        <Text style={styles.text}>{String(rowData)}</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.ds.cloneWithRows(this.props.numbers)}
        renderRow={this.renderRow}
        enableEmptySections={true}
      />
    );
  }
}

List.defaultProps = {
  numbers: []
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  text: {
    width: '100%',
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 30,
  }
});
