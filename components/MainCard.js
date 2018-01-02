import React, { Component } from 'react';
import { Card, ListItem } from 'react-native-elements'; // 0.18.5
import '@expo/vector-icons'; // 6.2.2

export default class MainCard extends Component {
  
  _handlePress() {
    const { navigate } = this.props.navigation;
    navigate('Details');
    console.log('Pressed');
  }
  
  
  render() {
    const { books } = this.props;
    const navigate  = this.props.navigate;
    return (
      <Card title="Gems">
        {books.map((u, i) => {
          return (
            <ListItem
              key={i}
              title={u.title}
              leftIcon={{ name: 'library-books' }}
              onPress={() => navigate('Details', {book: books[i]})}
              onPressDelete={this._handlePressDelete}
            />
          );
        })}
      </Card>
    );
  }
}
