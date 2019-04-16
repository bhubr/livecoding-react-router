// ProfileList.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileList extends Component {
  constructor(props) {
    super(props);
    // Initialize an empty array in the state,
    // to store users fetched from the API
    this.state = {
      users: []
    };
  }

  // This is a lifecycle method. It's part of the
  // methods provided by class React.Component
  // It is run right after the FIRST render only,
  // and is the best place to send API calls from.
  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(usersList => this.setState({
        users: usersList
      }));
  }

  render() {
    return (
      <div className="ProfileList">
        {
          this.state.users.map(user => {
            const isFavorite = this.props.favorites.includes(user.id);
            const btnLabel = isFavorite
              ? 'Remove from favorites'
              : 'Add to favorites';
            return (
              <section>
                <h3>{user.login}</h3>
                <img src={user.avatar_url} alt={user.login} />
                <Link to={`/profile/${user.login}`}>{`/profile/${user.login}`}</Link>
                <button
                  type="button"
                  onClick={() => this.props.addOrRemoveFavorite(user.id)}
                >
                  {btnLabel}
                </button>
              </section>
            );
          })
        } 
      </div>
    );
  }
}

export default ProfileList;