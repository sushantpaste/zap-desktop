// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactSVG from 'react-svg'
import { MdAccountBalanceWallet, MdSettings } from 'react-icons/lib/md'
import { FaClockO, FaBitcoin, FaDollar } from 'react-icons/lib/fa'
import { satoshisToBtc } from '../../../../utils/bitcoin'
import styles from './Nav.scss'

class Nav extends Component {
  render() {
    console.log('props: ', this.props)
    const { ticker, balance } = this.props
    return (
      <nav className={styles.nav}>
        <ul className={styles.info}>
          <li className={`${styles.currencies} ${styles.link}`}>
            <span className={`${styles.currency} ${ticker.current === 'btc' ? styles.active : ''}`}>
              <FaBitcoin />
            </span>
            <span className={`${styles.currency} ${ticker.current === 'usd' ? styles.active : ''}`}>
              <FaDollar />
            </span>
          </li>
          <li className={`${styles.balance} ${styles.link}`}>
            <p>
              <span>{ticker.current === 'btc' ? <FaBitcoin /> : <FaDollar />}</span>
              <span>{satoshisToBtc(balance.walletBalance)}</span>
            </p>
            <p>
              <span>{ticker.current === 'btc' ? <FaBitcoin /> : <FaDollar />}</span>
              <span>{satoshisToBtc(balance.channelBalance)}</span>
            </p>
          </li>
        </ul>

        <div className={styles.logo}>
          <ReactSVG path='../resources/zap_2.svg' />
        </div>

        <ul className={styles.links}>
          <li className={styles.link}>
            <FaClockO />
            <span>Activity</span>
          </li>
          <li className={styles.link}>
            <MdAccountBalanceWallet />
            <span>Wallet</span>
          </li>
          <li className={styles.link}>
            <MdSettings />
            <span>Settings</span>
          </li>
        </ul>  
        <div className={styles.buttons}>
          <div className={styles.button}>
            <span>Pay</span>
          </div>
          <div className={styles.button}>
            <span>Request</span>
          </div>
        </div>
      </nav>
    )
  }
}

Nav.propTypes = {
  ticker: React.PropTypes.object.isRequired,
  balance: React.PropTypes.object.isRequired
}

export default Nav