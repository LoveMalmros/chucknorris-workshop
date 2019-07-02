import React, { Component } from "react";
import Axios from "axios";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    quote: ""
  };

  generateQuote() {
    Axios.get("https://api.chucknorris.io/jokes/random").then(response => {
      this.setState({ quote: response.data.value });
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Card>
          <CardBody>
            <CardTitle>Chuck Norris quote</CardTitle>
            <CardText>{this.state.quote}</CardText>
            <Button color="success" onClick={() => this.generateQuote()}>
              Generate quote
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
