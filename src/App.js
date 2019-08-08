import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import OfficeCard from "./components/OfficeCard";
import Footer from "./components/Footer";
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    topScore: 0,
    clicked: [],
    incorrect: ""
  }

  componentDidMount() {
    this.setState({
      cards: this.shuffleCards(cards)
    });
  }

  checkScore() {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      });
    }
  }

  removeWobble() {
    this.setState({
      incorrect: ""
    })
  }

  shuffleCards = array => {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
  }

  handleClick = id => {
    this.removeWobble();
    if (this.state.clicked.includes(id)) {
      this.setState({
        score: 0,
        clicked: [],
        incorrect: "wobble"
      }, function () {
        console.log(this.state.clicked);
      })
    }
    else {
      this.setState(previousState => ({
        score: this.state.score + 1,
        clicked: [...previousState.clicked, id]
      }), function () {
        this.checkScore();
        console.log(this.state.clicked);
      })
    }
    this.setState({
      cards: this.shuffleCards(cards)
    });
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Banner>
          <h1>Click a picture to get started...</h1>
          <h3>But don't click the same picture more than once!</h3>
        </Banner>
        <Wrapper>
          {this.state.cards.map(employee => (
            <OfficeCard
              incorrect={this.state.incorrect}
              handleClick={this.handleClick}
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
