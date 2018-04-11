import React, { Component } from "react";

//components
import ListRepos from "./components/ListRepos";

//API
import { fetchRepos } from "./API";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: "Jarpa",
      repos: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetchRepos(this.state.user).then(repos =>
      this.setState({ repos, loading: false })
    );
  }

  render() {
    const { repos, loading } = this.state;
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Challenge - Frontend Developer</h1>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <ListRepos data={repos} />
        )}
      </div>
    );
  }
}

export default App;
