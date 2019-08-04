import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Slider
} from "react-native";
import Constants from "expo-constants";

import Button from "./components/Button";
import BattleArena from "./components/Result";
import Result from "./components/Result";


const CHOICES = [
  {
    name: "rock",
    uri: require("./assets/rock.png")
  },
  {
    name: "paper",
    uri: require("./assets/paper.png")
  },
  {
    name: "scissors",
    uri: require("./assets/scissors.png")
  }
];

randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];

  getRoundOutcome = userChoice => {
    const computerChoice = this.randomComputerChoice().name;
    let result;

    if (userChoice === "rock") {
      result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "paper") {
      result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "scissors") {
      result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    }

    if (userChoice === computerChoice) result = "Tie game!";

    return [result, computerChoice];
  };

export default class GameScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gamePrompt: "Choose your weapon!",
      userChoice: {},
      computerChoice: {},
      totalPlayed: 0,
      totalWons: 0,
      totalLosts: 0,
      totalTied: 0
    };
  }

  weaponPess = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(
      choice => choice.name === compChoice
    );

    this.setState({ totalPlayed: this.state.totalPlayed + 1 });
    if (result === "Victory!") {
      this.setState({ totalWons: this.state.totalWons + 1 });
    } else if (result === "Defeat!") {
      this.setState({ totalLosts: this.state.totalLosts + 1 });
    } else {
      this.setState({ totalTied: this.state.totalTied + 1 });
    }

    this.setState({ gamePrompt: result });
    this.setState({ userChoice: newUserChoice });
    this.setState({ computerChoice: newComputerChoice });

  };

  clearPress = () => {
    this.setState({ totalPlayed: 0 });
    this.setState({ totalWons: 0 });
    this.setState({ totalLosts: 0 });
    this.setState({ totalTied: 0 });

  }

  getResultColor = () => {
    if (this.state.gamePrompt === "Victory!") return "blue";
    if (this.state.gamePrompt === "Defeat!") return "red";
    return null;
  };

  render() {
    const { totalPlayed, totalWons, totalLosts, totalTied } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              fontSize: 10,
              color: this.getResultColor(),
              fontWeight: "bold"
            }}
          >
            {this.state.gamePrompt}
          </Text>
        </View>
        <View style={styles.battleContainer}>
          <Result
            p1Name="player 1"
            p2Name="player 2"
            p1Choice={this.state.userChoice}
            p2Choice={this.state.computerChoice}
          />
        </View>
        <View style={styles.buttonsContainer}>
          {CHOICES.map(choice => {
            return (
              <View style={styles.buttonContainer} key={choice.name}>
                <Button
                  name={choice.name}
                  size={50}
                  onPress={this.weaponPess}
                  backgroundColor={"#0b43ba"}
                />
              </View>
            );
          })}
        </View>

        <View style={styles.statisticsContainer}>
          
          <View style={styles.numbersAndButton}>
            <View style={styles.numbersContainer}>
              <Text style={styles.numbersText}>
                Total games played: {totalPlayed}
              </Text>
              <Text style={styles.numbersText}>Total games won: {totalWons}</Text>
              <Text style={styles.numbersText}>
                Total games lost: {totalLosts}
              </Text>
              <Text style={styles.numbersText}>Total game tied: {totalTied}</Text>
            </View>
            <View style={styles.clearButtonContainer}>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={this.clearPress}
              >
                <Text style={styles.clearButtonText}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.sliderContainer}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 2}}>
              <Text style={{paddingTop: 10}}>{Math.round(this.state.totalWons / this.state.totalPlayed * 100) || 0}%</Text>
            </View>
            <View style={{flex: 1}}>
              <Slider
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#009c31"
                  value={(this.state.totalWons / this.state.totalPlayed ) || 0}
              />
            </View>
          </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  battleContainer: {
    flex: 4,
    padding: 10
  },
  buttonsContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    paddingBottom: 10,
    width: "50%"
  },

  statisticsContainer: {
    flex: 2,
  },
  numbersAndButton: {
    flexDirection: "row",
    flex: 3
  },
  numbersContainer: {
    flex: 4,
    paddingLeft: 30,
    justifyContent: "center"
  },
  numbersText: {
    fontSize: 10,
  },
  clearButtonContainer: {
    flex: 2,
    paddingRight: 15,
    justifyContent: "center",
    alignItems: 'center'
  },
  clearButton: {
    width: "100%",
    backgroundColor: "#001bcc",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  clearButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});