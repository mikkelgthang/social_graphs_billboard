import './App.css';
import React from 'react';
import HomePage from './homePage/HomePage';
import TopBar from './topBar/TopBar';
import BottomBar from './bottomBar/BottomBar';
import SentimentalPage from './sentimental/SentimentalPage';
import CollaborationsPage from './collaborations/collaborationsPage';

interface Props {
}

interface State {
  selectedWindow: number;
}

class App extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);
    this.setWindow = this.setWindow.bind(this);
    this.state = { selectedWindow: 0 };
  }

  setWindow(n: number): void {
    this.setState({ selectedWindow: n });
  }

  render() {
    return (
      <div className="App" >
        <TopBar setWindow={this.setWindow} selectedWindow={this.state.selectedWindow} />
        <header className="App-header">
          {this.state.selectedWindow === 0 ? <HomePage /> : <div />}
          {this.state.selectedWindow === 1 ? <CollaborationsPage /> : <div />}
          {this.state.selectedWindow === 4 ? <SentimentalPage /> : <div />}
        </header>
        <BottomBar />
      </div >
    );
  }
}

export default App;
