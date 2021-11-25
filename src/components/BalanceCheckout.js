import React from "react";

class BalanceCheckout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            terms: 0
        }
    }

    onClick = () => {
        if (!this.state.token) {
            return;
          }
          console.log(this.state);
          window.balanceCheckout.init({
            isAuth: true,
            skipSuccessPage: true,
            dispalyDueDate: true,
            merchantNetDays: this.state.terms,
            onClose: () => {
                window.balanceCheckout.destroy();
            }
          });
    
          window.balanceCheckout.render(this.state.token, '#balance-modal');
    }

    onChangeToken = (event) => {
        this.setState({
            token: event.target.value
        })
    }

    onChangeTerms = (event) => {
        this.setState({
            terms: parseInt(event.target.value)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input onChange={this.onChangeToken} value={this.state.token} placeholder="Token"/>
                    <input type="number" onChange={this.onChangeTerms} value={this.state.terms} placeholder="Terms"/>
                    <button onClick={this.onClick}>Open modal</button>
                </div>
                <br/>
                <div id="balance-modal">

                </div>
            </div>
        )
    }
}

export default BalanceCheckout;