import styled from 'styled-components'

const RowStyled = styled.div`
  margin-left:${props => props.ml || '0px'};
  margin-right:${props => props.mr || '0px'};
  margin-top:${props => props.mt || '0px'};
  margin-bottom:${props => props.mb || '0px'};
  display: flex;
  -ms-flex-wrap: wrap;
  align-items:${props => props.v };
`

export default RowStyled