import Popup from 'reactjs-popup'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  width: 100%;
  height: 60px;
  padding: 20px;
  display: flex;
  align-items: center;
`

export const CancelBtn = styled.button`
  width: 80px;
  background-color: transparent;
  color: #616e7c;
  border: 1px solid #616e7c;
  border-radius: 2px;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`

export const ConfirmBtn = styled(CancelBtn)`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
`
export const MenuSmallPopupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const MenuPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    ...;
  }
  // use your custom style for ".popup-content"
  &-content {
    width: 100%;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    border: none;
    background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  }
`

export const LogoutPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    ...;
  }
  // use your custom style for ".popup-content"
  &-content {
    width: 300px;
    height: 150px;
    border-radius: 10px;
    padding:0px;
    border: none;
  }
`
export const CancelDesc = styled.p`
  color: ${props => (props.itemColor ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-size: '15px';
  font-weight: 500;
`
