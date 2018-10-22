import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'
import styled, { withTheme } from 'styled-components'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import FaAngleUp from 'react-icons/lib/fa/angle-up'
import Check from 'components/Icon/Check'
import Text from 'components/UI/Text'

/**
 * Container
 */
const CryptoSelectorContainer = styled(Flex)({})
CryptoSelectorContainer.defaultProps = {
  flexDirection: 'column',
  flexWrap: 'none',
  display: 'relative'
}

/**
 * Button
 */
const CryptoSelectorButton = styled(Box)({
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: 'inherit',
  cursor: 'pointer'
})
CryptoSelectorButton.defaultProps = {
  as: 'button',
  m: 0,
  px: 0,
  py: 2,
  textAlign: 'left'
}

/**
 * Menu
 */
const MenuContainer = styled(Box)({
  display: 'relative'
})

const Menu = styled(Box)({
  cursor: 'pointer',
  display: 'inline-block',
  position: 'absolute',
  'z-index': '999',
  'list-style-type': 'none',
  'border-radius': '3px',
  'box-shadow': '0 3px 4px 0 rgba(30, 30, 30, 0.5)'
})
Menu.defaultProps = {
  as: 'ul',
  m: 0,
  p: 0,
  bg: 'lightestBackground'
}

/**
 * MenuItem
 */
const MenuItem = styled(Box)`
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.darkestBackground};
  }
`
MenuItem.defaultProps = {
  as: 'li',
  px: 2,
  py: 2
}

/**
 * @render react
 * @name CryptoSelector
 * @example
 * <CryptoSelector />
 */
class CryptoSelector extends React.Component {
  state = {
    isOpen: false
  }
  onChange = this.onChange.bind(this)
  toggleMenu = this.toggleMenu.bind(this)
  setWrapperRef = this.setWrapperRef.bind(this)
  handleClickOutside = this.handleClickOutside.bind(this)

  static propTypes = {
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    onChange: PropTypes.func,
    setCurrency: PropTypes.func.isRequired
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  onChange(key) {
    const { onChange, setCurrency, currency } = this.props
    if (key !== currency) {
      setCurrency(key)
      if (onChange) {
        onChange(key)
      }
    }
    this.setState({ isOpen: false })
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isOpen: false })
    }
  }

  toggleMenu() {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    const { isOpen } = this.state
    const { currency, currencies, theme, ...rest } = this.props
    const selectedCurrency = currencies.find(c => c.key === currency)
    return (
      <CryptoSelectorContainer ref={this.setWrapperRef} {...rest}>
        <CryptoSelectorButton type="button" onClick={this.toggleMenu}>
          <Text textAlign="left">
            {selectedCurrency ? selectedCurrency.name : currency}{' '}
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </Text>
        </CryptoSelectorButton>
        {isOpen && (
          <MenuContainer>
            <Menu>
              {currencies.map(item => {
                return (
                  <MenuItem key={item.key} onClick={() => this.onChange(item.key)}>
                    <Flex alignItems="center">
                      <Text width="18px">
                        {currency === item.key && (
                          <Check height="0.95em" color={theme.colors.superGreen} />
                        )}
                      </Text>
                      <Text>{item.name}</Text>
                    </Flex>
                  </MenuItem>
                )
              })}
            </Menu>
          </MenuContainer>
        )}
      </CryptoSelectorContainer>
    )
  }
}

export default withTheme(CryptoSelector)
