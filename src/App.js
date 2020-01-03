import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  // async componentDidMount() {
  // this.setState({ loading: true });
  // const result = await axios.get(
  //   `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  // );
  // this.setState({ users: result.data, loading: false });
  // }

  searchUser = async text => {
    this.setState({ loading: true });

    const result = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: result.data.items, loading: false });
  };
  clear = () => {
    this.setState({ users: [] });
  };

  render() {
    return (
      <div className="App">
        <Navbar icon="fas fa-github" />
        <Search
          search={this.searchUser}
          clear={this.clear}
          showClearButton={this.state.users.length > 0 ? true : false}
        />
        <div className="containder">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
