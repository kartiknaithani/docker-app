import React, { Component } from "react";
import { Cards, Charts, StatePicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  state = {
    data: {},
  };
  render() {
    const { data } = this.state;
    return (
      <div className ={styles.container}>
        <h1>Environment variable fix updated text</h1>
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
