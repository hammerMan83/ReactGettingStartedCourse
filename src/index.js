import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img width="75" src={props.avatar_url} />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = props => {
  return (
    <div>
      {props.cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};

class Form extends React.Component {
  state = { userename: "" };

  handleSubmit = event => {
    event.preventDefault();
    //alert()
    console.log("Event: Form Submit", this.state.userName);
    // import axios and use it to Get github user names
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          //ref={input => (this.userNameInput = input)}
          placeholder="GitHub userename"
          required
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    cards: [
      {
        name: "Paul O'Shannesy",
        company: "Microsoft",
        avatar_url: "https://avatars0.githubusercontent.com/u/7563?v=4"
      },
      {
        name: "Jon Doe",
        company: "Google",
        avatar_url: "https://avatars0.githubusercontent.com/u/4425?v=4"
      }
    ]
  };

  render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
