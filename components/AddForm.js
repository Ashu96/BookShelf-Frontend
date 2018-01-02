import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements'; // 0.18.5
import '@expo/vector-icons'; // 6.2.2

export default class AddForm extends Component {
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

  _handleButtonPress = () => {
    console.log(this.state);
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
