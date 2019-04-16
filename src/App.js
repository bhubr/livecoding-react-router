import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileList from './ProfileList';
import SingleProfile from './SingleProfile';
import './App.css';

const users = [
  {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "defunkt",
    "id": 2,
    "node_id": "MDQ6VXNlcjI=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/defunkt",
    "html_url": "https://github.com/defunkt",
    "followers_url": "https://api.github.com/users/defunkt/followers",
    "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
    "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
    "organizations_url": "https://api.github.com/users/defunkt/orgs",
    "repos_url": "https://api.github.com/users/defunkt/repos",
    "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/defunkt/received_events",
    "type": "User",
    "site_admin": false
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
    this.addOrRemoveFavorite = this.addOrRemoveFavorite.bind(this);
  }

  addOrRemoveFavorite(id) {
    // On doit faire une COPIE du tableau

    // 1a façon ES5
    // const oldFavorites = this.state.favorites.slice(0);

    // 1b façon ES5
    // const oldFavorites = this.state.favorites.concat([]);

    // ES6
    if (!this.state.favorites.includes(id)) {
      const favorites = [...this.state.favorites, id];
      this.setState({ favorites });
    } else {
      // const index = this.state.favorites.indexOf(id);
      // const favorites = [...this.state.favorites];
      // favorites.splice(index, 1);
      const favorites = this.state.favorites.filter(
        userId => userId !== id
      );
      this.setState({ favorites });
    }
  }

  render() {
    const favorites = this.state.favorites;
    return (
      <div className="App">
        <Switch>
          <Route path="/profile/:login" component={SingleProfile} />
          <Route path="/" render={props => <ProfileList {...props} favorites={favorites} addOrRemoveFavorite={this.addOrRemoveFavorite} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
