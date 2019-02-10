import React, { Component } from 'react';
import Header from './components/Header/index'
import Cards from './components/Cards/cards'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      currentCampaign: 'default',
    };
  }

  callBackFromHeader = (campaign) => {
    this.setState({ currentCampaign: campaign });
    console.log("Home Current camapaign : ", campaign);
  }

  render() {
    return (
      <div className="container">
        <Header
          HomeCallback={this.callBackFromHeader}
        />
        <Cards
        currentCampaignId={this.state.currentCampaign}
        />
      </div>
    );
  }
}

export default Home;
