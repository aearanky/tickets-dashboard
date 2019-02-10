import React, {Component} from 'react';
import CampaignFilter from './campaign';
import PendingSearch from  './pending';
import Calendar from './calendar';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            currentCampaign: null
        };  
    }

    callBackFromCampaignFilter1 = (campaigns) => {
        this.setState({ campaigns: campaigns });
        this.props.HomeCallback(this.state.campaigns);
    }

    callBackFromCampaignFilter2 = (campaign) => {
        this.setState({ currentCampaign: campaign });
        console.log("Header : ", campaign);

        this.props.HomeCallback2(campaign);
    }

    render() {
      return (
            <div className="row">
                <div className="col-md-4">
                    <CampaignFilter 
                        HeaderCallback={this.callBackFromCampaignFilter1}
                        HeaderCallback2={this.callBackFromCampaignFilter2}
                        />
                </div>
                <div className="col-md-4">
                    <PendingSearch/>
                </div>
                <div className="col-md-4">
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default Header;