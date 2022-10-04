import styled, { css } from 'styled-components'

const TextWrapperIcon = styled.div`
  margin-left: 6px;
`

const TextWrapper = styled.div`
width:100%;
height:100%;
margin-top:8px;
 justify-content:center;
`

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0px;
  margin-left:${props => props.ml || '0px'};
  margin-right:${props => props.mr || '0px'};
  margin-top:${props => props.mt || '0px'};
  margin-bottom:${props => props.mb || '0px'};
  border-radius: ${props =>
    props.shape === 'circle' ? '50%' : '6px'}; 
  &:hover {
    background-color: ${props => (props.isHover === 'true' ? '#ceead6' : null)};
  }
  &:active {
    background: ${props => (props.isActive === 'true' ? '#ccc' : null)};
  }
  ${props => {
    switch (props.variant) {
      case 'primary':
        return css`
        border-radius:4px;
          font-size: 14px;
          background: #188038;
          padding: 10px 12px 10px 12px;
          color: ${props => props.color || '#fff'};
          font-weight: 500;
        `
      case 'avatar':
        return css`
          width:32px;
          height:32px;
          font-size: 18px;
          background: #0288d1;
          border-radius: 50%;
          color: ${props => props.color || '#fff'};
        `
      default:
        return css`
          padding:8px;
          font-size: 14px;
          color: ${props => props.color || '#202124'};
          font-weight: normal;
        `
    }
  }}
`

export { ButtonStyled, TextWrapper, TextWrapperIcon }