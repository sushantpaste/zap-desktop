import React from 'react'
import Toggle from 'react-toggle'
import Slider from 'rc-slider'
import Isvg from 'react-inlinesvg'
import FaAngleUp from 'react-icons/lib/fa/angle-up'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import FaCircle from 'react-icons/lib/fa/circle'
// import FaCircle from 'react-icons/lib/fa/circle'
// import FaPlayCircle from 'react-icons/lib/fa/play-circle'
// import FaAngleDown from 'react-icons/lib/fa/angle-down'

// import InputRange from 'react-input-range'

import zapLogo from 'icons/zap_logo.svg'
import bitcoinIcon from 'icons/bitcoin.svg'
import litecoinIcon from 'icons/ltc-logo.svg'
import iconPlus from 'icons/icon-plus.svg'
import rightArrow from 'icons/icon-big-arrow-right.svg'
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
      <div className={styles.titleBar} />

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Isvg src={zapLogo} />
        </div>

        <div className={styles.wallets}>
          <section className={styles.walletContainer}>
            <h2 className={styles.subHeader}>Your Wallets</h2>

            <ul>
              <li className={`${styles.wallet} ${styles.active}`}>Spending Wallet</li>
              <li className={styles.wallet}>Trading Wallet</li>
            </ul>
          </section>
          <section className={styles.walletContainer}>
            <h2 className={styles.subHeader}>More</h2>

            <ul>
              <li className={`${styles.wallet}`}>Raspi Node</li>
              <li className={styles.wallet}>Digital Ocean Node</li>
              <li className={styles.wallet}>BTCPay Server</li>
            </ul>
          </section>
        </div>

        <footer className={styles.footer}>
          <div>
            <Isvg src={iconPlus} /> <i>Create new wallet</i>
          </div>
        </footer>
      </nav>

      <div className={styles.content}>
        <nav>
          <div className={styles.user}>
            <i className={styles.circle}>
              <FaCircle />
            </i>
            <span className={styles.username}>jimmymow</span>
            <i className={styles.down}>
              <FaAngleDown />
            </i>
          </div>
        </nav>

        <div className={styles.walletInfo}>
          <section className={styles.header}>
            <h1>Spending Wallet</h1>
            <span className={styles.launch}>
              Launch <Isvg src={rightArrow} />
            </span>
          </section>

          <section className={styles.settings}>
            <h2>Settings</h2>

            <div className={styles.chain}>
              <h3>Chain</h3>
              <div className={styles.divider} />

              <div className={styles.chains}>
                <section>
                  <div className={styles.active}>
                    <Isvg src={bitcoinIcon} />
                  </div>
                </section>
                <section>
                  <div>
                    <Isvg src={litecoinIcon} />
                  </div>
                </section>
              </div>
            </div>

            <div className={styles.autopilot}>
              <header>
                <h3>Autopilot</h3>
                <Toggle defaultChecked icons={false} />
              </header>

              <div className={styles.divider} />

              <div className={styles.autopilotConfig}>
                <h4>Max number of autopilot channels</h4>
                <div>
                  <aside>
                    <input type="text" pattern="[0-9]*" value={5} />
                  </aside>
                  <aside>
                    <i>
                      <FaAngleUp />
                    </i>
                    <i>
                      <FaAngleDown />
                    </i>
                  </aside>
                </div>
              </div>

              <div className={styles.autopilotConfig}>
                <h4>Percentage of balance to use</h4>
                <div>
                  <Slider min={0} max={100} defaultValue={60} />
                  <span>60%</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default NextOnboarding
