import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import ChoiceCard from './ChoiceCard';

const Result = ({p1Name, p2Name, p1Choice, p2Choice}) => {
    return (
        <View style={styles.container}>
          <View style={styles.battleBox}>
            <View style={styles.player}>
              <ChoiceCard
                  style={styles.player}
                  player={p1Name}
                  choice={p1Choice}
              />
            </View>
            <View style={styles.vs}>
              <Text style={styles.vsText}>VS</Text>
            </View>
            <View style={styles.player}>
              <ChoiceCard
                  style={styles.player}
                  player={p2Name}
                  choice={p2Choice}
              />
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  battleBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: 'row',
    borderRadius: 20,
    
  },
  player: {
    flex: 5,
    justifyContent: 'center'
  },
  vs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  vsText: {
    fontWeight: 'bold', 
    color: 'red'
  },
  name:{
    flex: 1,
  },
  imageContainer: {
    flex: 3
  },
  image: {
    flex: 1,
    width: null, 
    height: null,
  }
})

export default Result
