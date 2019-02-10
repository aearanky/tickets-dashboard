import React, {Component} from 'react';

class Calendar extends Component {

    state = {
        date: new Date(),
      }
     
    onChange = date => this.setState({ date })

    render() {
      return (
        <div>
            <input type="date" name="bday" min="1000-01-01"
            max="3000-12-31" className="form-control"></input>
        </div>
        );
    }
}

export default Calendar;