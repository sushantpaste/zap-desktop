import React from 'react'
import Isvg from 'react-inlinesvg'
// import FaCircle from 'react-icons/lib/fa/circle'
// import FaPlayCircle from 'react-icons/lib/fa/play-circle'
// import FaAngleDown from 'react-icons/lib/fa/angle-down'

// import InputRange from 'react-input-range'

import zapLogo from 'icons/zap_logo.svg'
// import cloudLightning from 'icons/cloudLightning.svg'
// import btcPay from 'icons/btcpay.svg'
// import lndLogo from 'icons/lnd-logo.svg'
// import plusCircle from 'icons/plus-circle.svg'
// import btcLogo from 'icons/bitcoin.svg'
// import ltcLogo from 'icons/ltc-logo.svg'
import styles from './NextOnboarding.scss'

const NextOnboarding = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Isvg src={zapLogo} />
        </div>

        <div className={styles.wallets}>
          <h2 className={styles.subHeader}>Your Wallets</h2>

          <ul>
            <li className={`${styles.wallet} ${styles.active}`}>Wallet #1</li>
            <li className={styles.wallet}>Wallet #1</li>
            <li className={styles.wallet}>Remote LND</li>
            <li className={styles.wallet}>Remote LND 2</li>
            <li className={styles.wallet}>BTCPayServer</li>
          </ul>
        </div>

        <footer className={styles.footer}>
          <div>Create new wallet</div>
        </footer>
      </nav>

      <div className={styles.content} />
    </div>
  )
}

export default NextOnboarding
