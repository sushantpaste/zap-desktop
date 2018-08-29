import React from 'react'
import Isvg from 'react-inlinesvg'
import FaCircle from 'react-icons/lib/fa/circle'
import FaPlayCircle from 'react-icons/lib/fa/play-circle'
import FaAngleDown from 'react-icons/lib/fa/angle-down'

import zapLogo from 'icons/zap_logo.svg'
import cloudLightning from 'icons/cloudLightning.svg'
import btcPay from 'icons/btcpay.svg'
import lndLogo from 'icons/lnd-logo.svg'
import plusCircle from 'icons/plus-circle.svg'
import styles from './NextOnboarding.scss'

const NextOnboarding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBar} />

      <header className={styles.header}>
        <section>
          <Isvg src={zapLogo} />
        </section>

        <section>
          <span className={styles.circle}>
            <FaCircle />
          </span>
          <span>jimmymow</span>
          <FaAngleDown />
        </section>
      </header>

      <div className={styles.lastUsedWallet}>
        <section className={styles.wallet}>
          <div className={styles.walletBox}>
            <Isvg src={cloudLightning} className={styles.isvg} />
          </div>
          <div className={styles.walletTitle}>
            <div>
              <h1>My Favorite Wallet</h1>
              <span className={styles.launch}>
                Launch <FaPlayCircle />
              </span>
            </div>
          </div>
        </section>
        <section className={styles.config}>
          <div className={styles.setting} />
          <div className={styles.setting} />
          <div className={styles.setting} />
        </section>
      </div>

      <div className={styles.otherWallets}>
        <h2>Other wallets</h2>
        <ul>
          <li>
            <div className={styles.otherWalletBox}>
              <Isvg src={btcPay} className={styles.btcpay} />
            </div>
            <h4>My BTCPay Server</h4>
            <span className={styles.timestamp}>Yesterday</span>
          </li>
          <li>
            <div className={styles.otherWalletBox}>
              <Isvg src={lndLogo} className={styles.btcpay} />
            </div>
            <h4>My remote LND</h4>
            <span className={styles.timestamp}>1 week ago</span>
          </li>
          <li>
            <div className={styles.otherWalletBox}>
              <Isvg src={lndLogo} className={styles.btcpay} />
            </div>
            <h4>Other remote LND</h4>
            <span className={styles.timestamp}>1 week ago</span>
          </li>
          <li className={styles.createWallet}>
            <div className={styles.otherWalletBox}>
              <section>
                <Isvg src={plusCircle} className={styles.btcpay} />
                <span className={styles.createWalletCaption}>Create new wallet</span>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NextOnboarding
