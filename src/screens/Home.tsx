import React, { useState } from 'react';
import { FriendList } from '../components/FriendList';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';

export function Home(){
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([])

  async function handleSearch() {
    const response = await fetch(`http://192.168.0.3:3333/friends?q=${name}`);
    const data = await response.json();
    setFriends(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput 
        placeholder='Nome do cliente'
        onChangeText={setName}
        style={styles.input}
      />

      <Button 
        title="Buscar"
        onPress={handleSearch}
      />

      <ScrollView style={styles.list}>
        <FriendList data={friends} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10
  },
  list: {
    marginTop: 20
  }
})