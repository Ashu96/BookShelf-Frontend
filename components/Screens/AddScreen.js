import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements'; // 0.18.5
import '@expo/vector-icons'; // 6.2.2

export default class AddScreen extends Component {
  static navigationOptions = {
    title: 'Add',
  };

  state = {
    title: '',
    author: '',
    edition: 0,
  };

  _handleTitleSubmit = () => {
    this.authorInput.focus();
  };
  _handleAuthorSubmit = () => {
    this.editionInput.focus();
  };

  _handleTitleChange = title => {
    this.setState({ title });
  };

  _handleClearAll = () => {
    this.titleInput.clear();
    this.authorInput.clear();
    this.editionInput.clear();
  };

  _handleButtonPress = async () => {
    const { title, author, edition } = this.state;
    const major = 'Science';
    try {
      const response = await fetch(
        'https://cool-book-shelf.herokuapp.com/api/books',
        {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
            title,
            author,
            major,
            edition,
          }),
        }
      );

      const json = await response.json();
      console.log(json);
      alert('Added Successfully!');
      this.props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      alert('Sorry! Something went wrong!');
    }
  };

  render() {
    const { title, author, edition } = this.state;

    return (
      <Card title="Add Book">
        <FormLabel>
          Title
        </FormLabel>
        <FormInput
          ref={input => (this.titleInput = input)}
          onSubmitEditing={this._handleTitleSubmit}
          onChangeText={title => {
            this.setState({ title });
          }}
          value={title}
          autoCorrect
          returnKeyType="next"
        />
        <FormLabel>
          Author
        </FormLabel>
        <FormInput
          ref={input => (this.authorInput = input)}
          onSubmitEditing={this._handleAuthorSubmit}
          onChangeText={author => {
            this.setState({ author });
          }}
          value={author}
          returnKeyType="next"
        />
        <FormLabel>
          Edition
        </FormLabel>
        <FormInput
          ref={input => (this.editionInput = input)}
          onChangeText={edition => {
            this.setState({ edition });
          }}
          value={edition}
          returnKeyType="done"
        />
        <Button
          raised
          title="Add Book"
          backgroundColor="#61bd4f"
          style={styles.button}
          onPress={this._handleButtonPress}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 20,
  },
});
