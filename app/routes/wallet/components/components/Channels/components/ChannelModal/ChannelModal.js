// @flow
import { shell } from 'electron'
import React, { Component } from 'react'
import ReactModal from 'react-modal'
import styles from './ChannelModal.scss'

class ChannelModal extends Component {
  render() {
    const customStyles = {
      overlay: {
        cursor: 'pointer',
        overflowY: 'auto'
      },
      content: {
        top: 'auto',
        left: '20%',
        right: '0',
        bottom: 'auto',
        width: '40%',
        margin: '50px auto',
        padding: '40px'
      }
    }

    const { isOpen, resetChannel, channel } = this.props

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel='No Overlay Click Modal'
        ariaHideApp
        shouldCloseOnOverlayClick
        onRequestClose={() => resetChannel(null)}
        parentSelector={() => document.body}
        style={customStyles}
      >
        {
          channel ?
            <div className={styles.channel}>
              <header className={styles.header}>
                <h1 data-hint='Remote public key' className='hint--top-left'>{channel.remote_pubkey}</h1>
                <h2
                  data-hint='Channel point'
                  className='hint--top-left'
                  onClick={() => shell.openExternal(`https://testnet.smartbit.com.au/tx/${channel.channel_point.split(':')[0]}`)}
                >
                  {channel.channel_point}
                </h2>
              </header>

              <div className={styles.balances}>
                <section className={styles.capacity}>
                  <h3>{channel.capacity}</h3>
                  <span>Capacity</span>
                </section>
                <div className={styles.balance}>
                  <section className={styles.local}>
                    <h4>{channel.local_balance}</h4>
                    <span>Local</span>
                  </section>
                  <section className={styles.remote}>
                    <h4>{channel.remote_balance}</h4>
                    <span>Remote</span>
                  </section>
                </div>
              </div>
              <div className={styles.details}>
                <dl>
                  <dt>Sent</dt>
                  <dd>{channel.total_satoshis_sent}</dd>
                  <dt>Received</dt>
                  <dd>{channel.total_satoshis_received}</dd>
                  <dt>Updates</dt>
                  <dd>{channel.num_updates}</dd>
                </dl>
              </div>
              <div className={styles.close}>
                <div>Close channel</div>
              </div>
              <footer className={styles.active}>
                <p>{channel.active ? 'Active' : 'Not active'}</p>
              </footer>
            </div>
            :
            null
        }
      </ReactModal>
    )
  }
}


export default ChannelModal
