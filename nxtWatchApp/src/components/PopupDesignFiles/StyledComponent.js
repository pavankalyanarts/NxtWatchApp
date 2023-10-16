import styled from 'styled-components'

export const PopupMenuLink = styled.li`
  background-color: ${props => (props.selected ? '#e2e8f0' : '')};
  background-color: ${props =>
    props.selected && props.itemColor ? '#383838' : ''};

  width: 100%;
  height: 40px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const PopInnerContainer = styled.div`
  color: ${props => (props.itemColor ? '#d7dfe9' : '#475569')};
  color: ${props =>
    props.selected && props.itemColor ? '#d7dfe9' : '#475569'};
  width: 140px;
  display: flex;
  align-items: center;
  margin: auto;
`
