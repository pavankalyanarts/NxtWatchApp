import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.bgColor ? '#313131' : '#ffffff')};
`

export const LabelText = styled.label`
  color: ${props => (props.itemColor ? '#ffffff' : '#94a3b8')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
`
export const InputBox = styled.input`
    background-color: transparent;
    width: 100%;
    height: 40px;
    color: ${props => (props.itemColor ? '#ffffff' : '#1e293b')};
    font-family: 'Roboto'
    font-size: 10px;
    font-weight: 500;
    padding: 15px;
    border: 1px solid #e2e8f0;
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 15px;
    outline: none;
    &:hover{
        background-color: #d7dfe9;
        color: #1e293b;
    }
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
`
