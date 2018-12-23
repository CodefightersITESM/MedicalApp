import React from 'react';
import { View } from 'react-native';
import { Header, Footer, Body, Container, Text, Button, Icon } from 'native-base';

class TestScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Test screen</Text>
        <Button><Text>Click Me</Text></Button>
        <Icon name='home' />
      </View>
    );
  }
}

export default TestScreen;