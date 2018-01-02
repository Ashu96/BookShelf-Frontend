import React, { Component } from 'react';
import { View, ActivityIndicator, ScrollView, Text, StyleSheet } from 'react-native';
import MainCard from '../MainCard';
import "@expo/vector-icons"; // 6.2.2

const ErrorScreen = () => {
  return(
    <View style={styles.centerContainer}>
      <Text style={styles.error}>Error!{'\n'}Please! Try again</Text>
    </View>
    ); 
}

const LoadingScreen = () => {
  return(
    <View style={styles.centerContainer}>
     <ActivityIndicator />
    </View>
    ); 
}

export default class HomeScreen extends Component {
    constructor(props) {
    super(props);
    this.state = { loading: true, error: false, books: [], refresh: false };
  }
  
  componentWillMount = async () => {
    try {
      const response = await fetch('http://cool-book-shelf.herokuapp.com/api/books');
      const json = await response.json();
      this.setState({books: json.books, loading: false });
    } catch(error) {
      this.setState({ loading: false, error: true });
    }
    
  }
  
  render() {
     if (this.state.error) {
      return <ErrorScreen />
    }
    if (this.state.loading) {
      return <LoadingScreen />
    }
    
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Book Shelf</Text>
        <MainCard 
          books={this.state.books}
          navigate = {navigate}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0079bf'
  },
  titleText: {
    paddingTop: 40,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  error: {
    fontSize: 18,
    color: 'red'
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
