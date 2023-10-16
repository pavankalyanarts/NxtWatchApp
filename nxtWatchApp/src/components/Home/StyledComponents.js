import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    overflow-y: auto;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.textColor ? '#ebebeb' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 10px;
`
export const FailureDetails = styled.p`
  color: ${props => (props.textColor ? '#909090' : '#475569')};
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 25px;
  margin: 10px;
  text-align: center;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 8px;
  width: 80px;
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
