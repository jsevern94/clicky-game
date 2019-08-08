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
    clicked: []
  }

  componentDidMount() {
    this.setState({
      cards: this.shuffleCards(cards)
    });
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
    if (this.state.clicked.includes(id)) {
      this.setState({
        score: 0,
        clicked: []
      });
    }
    else {
      this.setState({
        score: this.state.score + 1,
        clicked: this.state.clicked.push(id)
      });
    }
    this.setState({
      cards: this.shuffleCards(cards)
    });
    console.log(this.state.clicked)
  }

  // handleIncorrectClick = id => {

  // }


  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Banner>
          <h1>Click a picture to get started...</h1>
          <h3>But don't click the same picture more than once!</h3>
        </Banner>
        <Wrapper>
          {this.state.cards.map(employee => (
            <OfficeCard
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
