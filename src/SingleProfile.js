import React, { Component } from 'react';
import axios from 'axios';

class SingleProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const { login } = this.props.match.params;
    axios.get(`https://api.github.com/users/${login}`)
      .then(response => response.data)
      .then(user => {
        this.setState({ user: user });
      })
      .catch(err => {
        console.error('ERROR', err.message);
        alert('Impossible de récupérér l\'utilisateur')
      })
  }

  render() {
    // if (!this.state.user) {
    //   return <div />;
    // }
    return (
      <div className="SingleProfile">
        <section>
          {/* <button type="button" onClick={this.props.history.goBack}>
            &larr;
          </button> */}

          {
            this.state.user && (
                <div>
                <h3>{this.state.user.login}</h3>
                <img src={this.state.user.avatar_url} alt={this.state.user.login} />
                <p>Real name: {this.state.user.name}</p>
                <p>Blog:
                  <a target="_blank" href={this.state.user.blog}>
                    {this.state.user.blog}
                  </a>
                </p>
                <p>Location: {this.state.user.location}</p>
              </div>
            )
          }
        </section>
      </div>
    );
  }
}

export default SingleProfile;