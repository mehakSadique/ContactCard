import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="Bob"
          mobile="2122130720"
          work="800999999"
          email="bobbie@gmail.com"
        />
        <ContactCard
          name="Jill"
          mobile="7185555555"
          work="7182222222"
          email="jill@example.org"
        />
        <ContactCard
          name="Jack"
          mobile="3476854999"
          work="891829192"
          email="Jack@example.com"
        />
      </>
    );
  }
}

export default App;
