import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EventsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Events Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});