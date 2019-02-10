import React, { Component } from 'react';

class Cards extends Component {

    constructor() {
        super();
        this.state = {
            cards: []
        };
    }

    componentWillMount() {
        fetch('./assets/cards.json')
            .then(response => response.json())
            .then(data => this.setState({ cards: data.cards }))
            .catch(function (error) {
                console.log(error);
            });
    }

    makeCards(table, currentCard, index) {

        const divStyle = {
            'marginTop': '15px',
            'marginLeft': '20px',
            'border': '1px solid #000000',
            'paddingLeft': "5px",
            'paddingRight': "5px",

        };

        const pStyle = {
            'fontSize': '12px'
        };

        const progressBarStyle = {
            'width': '70%',
            'color': 'green'
        };

        table.push(
            <div className="col-md-3" style={divStyle} key={index}>
                <div>
                    <img src={currentCard.primaryMediaUrl}
                        width="100%"
                        height="100%">
                    </img>
                </div>
                <p style={pStyle}>
                    {currentCard.cardTitle}
                </p>
                <div className="row d-flex">
                    <div className="p-2">
                        {currentCard.listOfPlans[0].price.currencySymbol}
                        {currentCard.listOfPlans[0].price.amount} / Month
                </div>
                    <div className="p-2">
                        {this.modifyState(currentCard, 'expired')}
                    </div>
                </div>
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={progressBarStyle}
                    >
                        <span className="sr-only">
                            70% Complete
                    </span>
                    </div>
                </div>
                <div className="row  d-flex">
                    <div className="p-2">
                        {currentCard.listOfPlans[0].price.currencySymbol} 15000
                </div>
                    <div className="p-2">
                        {currentCard.views}
                    </div>
                    <div className="p-2">
                        {currentCard.subscribers}
                    </div>
                </div>
            </div>
        );

        return table;
    }

    createTable = () => {
        let table = [];
        let numCards = this.state.cards.length;

        const showAllCards = this.props.currentCampaignId === 'default';

        for (let i = 0; i < numCards; i++) {
            let currentCard = this.state.cards[i];

            //filter by cards status:
            if (showAllCards) {
                this.makeCards(table, currentCard, i);
            } else {
                if (this.props.currentCampaignId === currentCard.campaignId) {
                    this.makeCards(table, currentCard, i);
                }
            }
        }

        return table;
    }

    modifyState(card, finalState) { //final state is fixed as "expired" in our example

        switch (card.currentWorkflow) { // switch takes in the current state
            case 'saved':
                card.currentWorkflow = 'pending'; // here, card.currentWorkflow is now same as next step
                break;
            case 'pending':
                if (finalState === 'declined')
                    card.currentWorkflow = 'declined';
                else
                    card.currentWorkflow = 'active';
                break;
            case 'active':
                if (finalState === 'paused')
                    card.currentWorkflow = 'paused';
                else if (finalState === 'terminated')
                    card.currentWorkflow = 'terminated';
                else if (finalState === 'expired')
                    card.currentWorkflow = 'expired';
                break;
            case 'paused':
                if (finalState === 'active' || finalState === 'terminated' || finalState === 'expired')
                    card.currentWorkflow = 'active';
                break;
            default:
                break;
        }

        return card.currentWorkflow;
    }

    render() {
        return (
            <div className="row">
                {this.createTable()}
            </div>
        );
    }
}

export default Cards;