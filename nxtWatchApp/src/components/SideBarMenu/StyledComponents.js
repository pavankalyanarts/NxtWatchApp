import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  width: 280px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SideBarLink = styled.li`
  background-color: ${props => (props.selected ? '#e2e8f0' : '')};
  background-color: ${props =>
    props.selected && props.itemColor ? '#383838' : ''};
  width: 100%;
  height: 40px;
  color: ${props => (props.itemColor ? '#d7dfe9' : '#475569')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
`
