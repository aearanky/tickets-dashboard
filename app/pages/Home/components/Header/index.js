import React, {Component} from 'react';
import CampaignFilter from './campaign';
import PendingSearch from  './pending';
import Calendar from './calendar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faList, faSearch)


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
            <div className="row Header">
                <div className="filter col-md-2">
                    <CampaignFilter 
                        HeaderCallback={this.callBackFromCampaignFilter}
                    />
                </div>
                <div className="row col-md-7">
                        <div className="Icon col-md-1">
                            <FontAwesomeIcon icon="list" size="lg"/>
                        </div>
                        <div className="Pending col-md-8">
                            <PendingSearch />
                        </div>
                        <div className="Icon col-md-1">
                            <FontAwesomeIcon icon="search" size="lg"/>
                        </div>
                </div>
                <div className="Calendar col-md-3">
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default Header;