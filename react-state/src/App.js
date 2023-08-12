import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Erling Haaland',
      bio: "is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team.",
      imgSrc: 'https://media.gettyimages.com/id/1402617690/photo/in-this-photo-released-on-june-13-2022-manchester-city-unveil-new-signing-erling-haaland-at.jpg?s=612x612&w=0&k=20&c=NYUuqn8A56AAOUpr-Z6rmXIhY3hbC0AHGhD5wmFxP88=',
      profession: 'FootBaller',
    },
    show: false,
    intervalId: null,
    timeSinceMount: 0,
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.updateTimeSinceMount, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1 className='person'>PERSON PROFILE</h1>
        <button onClick={this.toggleProfile}>{show ? 'Hide Profile' : 'Show Profile'}</button>
        {show && (
          <div className="profile">
            <img style={{width : '35rem'}} src={imgSrc} alt="Profile" />
            <h2 className='name'>{fullName}</h2>
            <p className='bio'>{bio}</p>
            <span>PROFESSION: {profession}</span>
          </div>
        )}
        <p className='tsm'>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
