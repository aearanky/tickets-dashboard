import React, {Component} from 'react';

class PendingSearch extends Component {
    render() {
      return (
        <div className="row">
            <input
                type="text"
                placeholder="Pending search"
                className="form-control"
                />
            
        </div>
        );
    }
}

export default PendingSearch;