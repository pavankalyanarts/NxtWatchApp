import styled from 'styled-components'

export const TrendingContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    overflow-y: auto;
  }
`

export const TrendingHeader = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${props => (props.bgColor ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    height: 100px;
    padding-left: 40px;
  }
`
