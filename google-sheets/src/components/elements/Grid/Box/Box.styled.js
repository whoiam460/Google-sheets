import styled from 'styled-components'

export const BoxStyled = styled.div`
display:${({display})=> display || 'block'};
align-items: ${({alignItems})=> alignItems };
justify-content: ${({justifyContent})=> justifyContent};
height: ${({height})=> height};
width: ${({width})=> width};
padding: ${({p})=> p || '0px'};
flex-direction: ${({flexDirection})=> flexDirection };
border-left: ${({borderLeft})=> borderLeft };
`