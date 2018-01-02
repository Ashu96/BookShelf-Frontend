import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements'; // 0.18.5
import '@expo/vector-icons'; // 6.2.2

const _book = {
  title: 'Software Desgin an Art',
  author: 'Peter hunt',
  edition: 4,
  artwork: 'https://i.pinimg.com/564x/20/9b/f1/209bf160c76b8a17f30428fe2e0093d5.jpg',
};

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  
  state = {
    book: this.props.navigation.state.params.book,
  }
  
  _handlePressDelete = async () => {
    const id = this.state.book._id;
    console.log(this.state.book._id);
    const baseURL = 'https://cool-book-shelf.herokuapp.com/api/books';
    try {
      const response = await fetch(baseURL + '/' + id , {
        method: 'delete'
      });
      const json = await response.json();
      console.log(json);
      alert('Deleted Successfully');
      this.props.navigation.navigate('Home');
    } catch(error) {
      console.log(error);
      alert('Something went wrong!')
    }
  }
  
  render() {
    const { book } = this.state;
    return (
      <Card title={book.title}>
        <Image style={styles.imageStyle} source={{ uri: _book.artwork }} />
        <View style={styles.mainContainer}>
         <View style={styles.subContainer}>
          <Icon
              name='person'
              type='material'
              color='#f56'
            />
          <Text style={styles.text}>by {book.author}</Text>
         </View>
           <View  style={styles.subContainer}>
          <Icon
              name='star'
              type='material'
              color='#f55'
            />
          <Text style={styles.text}>{book.edition}th edition</Text>
         </View>
        </View>
        <Button 
          title='Delete'
          onPress={this._handlePressDelete}
          backgroundColor='#f55'
          style={styles.button}
          icon={{name: 'delete'}}
          raised
          fontWeight='bold'
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  text: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  imageStyle: {
    width: 320,
    height: 240,
  },
  subContainer: {
    flexDirection: 'row'
  },
  button: {
    paddingTop: 20
  }
});
