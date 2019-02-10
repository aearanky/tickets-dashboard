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

    callBackFromCampaignFilter = (campaign) => {
        this.setState({ currentCampaign: campaign });
        console.log("Header : ", campaign);
        this.props.HomeCallback(campaign);
    }

    render() {
      return (
            <div className="row">
                <div className="col-md-4">
                    <CampaignFilter 
                        HeaderCallback={this.callBackFromCampaignFilter}
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