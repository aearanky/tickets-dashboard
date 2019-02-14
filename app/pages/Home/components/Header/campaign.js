import React, { Component } from 'react';

class CampaignFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
    };
  }

  componentWillMount() {
    fetch('./assets/campaigns.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ campaigns: data.campaigns });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  createCampaigns() {
    let campaigns = [];
    let numCampaigns = this.state.campaigns.length;

    // Default
    campaigns.push(
      <option key="All campaigns" value="default" defaultValue>All campaigns</option>
    );

    // Other campaigns
    for (let i = 0; i < numCampaigns; i++) {
      let currentCampaign = this.state.campaigns[i];
      campaigns.push(
        <option key={currentCampaign.campaignName} value={currentCampaign.id}>{currentCampaign.campaignName}</option>
      );
    }

    return campaigns;
  }

  render() {
    return (
        <select onChange={ (ev) => this.props.HeaderCallback(ev.target.value)} className="">
          {this.createCampaigns()}
        </select>
    );
  }
}

export default CampaignFilter;