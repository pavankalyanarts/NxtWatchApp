import styled from 'styled-components'

export const GamingContainer = styled.div`
  width: 100%;
  height: 95vh;
  overflow-y: auto;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    overflow-y: auto;
  }
`

export const GamingHeader = styled.div`
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
export const NoVideosContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.bgColor ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 20px;
`
export const FailureDetails = styled.p`
  color: ${props => (props.bgColor ? '#f4f4f4' : '#475569')};
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 25px;
  margin: 20px;
  text-align: center;
`
