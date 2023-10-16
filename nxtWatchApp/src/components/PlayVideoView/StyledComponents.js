import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  width: 100%;
  height: 95vh;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    overflow-y: auto;
    padding-left: 20px;
    padding-top: 25px;
  }
`

export const VideoDetailsSection = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 25px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
`

export const VideoTitle = styled.h1`
  color: ${props => (props.textColor ? '#ebebeb' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
`
export const VideoReactionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const ReactionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.isBtnActive ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`
export const VideoChannelSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 5px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
`
export const ChannelName = styled(VideoTitle)`
  font-size: 13px;
  margin-bottom: 5px;
`
export const ChannelSubs = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
`
export const VideoDescription = styled(ChannelSubs)`
  color: ${props => (props.textColor ? '#ebebeb' : '#1e293b')};
  margin-top: 25px;
  line-height: 20px;
`
