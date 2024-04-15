// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  updateBalance = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="cash-container">
          <div className="sara-container">
            <p className="sara-para">s</p>
            <h1 className="sara-heading">Sarah Williams</h1>
          </div>
          <div className="amount-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="amount">{count}</p>
              <p className="amount-para">In Rupees</p>
            </div>
          </div>
          <p className="sara-heading">Withdraw</p>
          <p className="balance-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="balance">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
