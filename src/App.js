import React, { Component } from 'react';
import axios from 'axios';

const WAKATIME_CLIENT_ID = '2KRJtoTyl9YJAJRffUs6STE4';
const GITHUB_CLIENT_ID = '5e8d491825b175a635cb';
const REDIRECT_URI = 'http://localhost:3000/';

class App extends Component {
  async componentDidMount() {
    const params = (new URL(document.location)).searchParams;
    const code = params.get("code");

    console.log(code);

    const wakatimeRes = await axios.get(`http://localhost:9999/wakatime/authenticate/${code}`);
    const githubRes = await axios.get(`http://localhost:9999/github/authenticate/${code}`);
    console.log(wakatimeRes, githubRes);
  }
  render() {
    return (
      <div className='App'>
      <a href={`https://wakatime.com/oauth/authorize?client_id=${WAKATIME_CLIENT_ID}&response_type=code&scope=email,read_logged_time,read_stats&redirect_uri=${REDIRECT_URI}`}>
        Connect with WakaTime
      </a>
      <br />
      <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&type=user_agent&scope=repo,user&redirect_uri=${REDIRECT_URI}`}>
        Connect with GitHub
      </a>
      </div>
    );
  }
}

export default App;
