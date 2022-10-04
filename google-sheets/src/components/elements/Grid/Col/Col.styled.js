import styled, { css } from "styled-components"

export const ColStyled = styled.div`
  flex: 1 0 0%;

  ${props =>
    props.variant === "auto" &&
    css`
      flex: 0 0 auto;
      width: auto;
    `}
  ${props =>
    props.variant >= 1 &&
    props.variant <= 12 &&
    css`
      flex: 0 0 auto;
      width: ${props => (props.variant / 12) * 100}%;
    `}
`