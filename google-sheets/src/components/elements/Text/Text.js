import styled, { css } from 'styled-components'

const variants = variant => {
  const textVariant = variant || 'body1'
  return css`
    font-size: var(--${textVariant}-fs);
    line-height: var(--${textVariant}-lh);
  `
}

const Text = styled.span`
  display: inline-block;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-weight: var(--fw-regular);
  color: ${({ color }) =>
    color ? `var(--text-${color})` : 'var(--secondary)'};
  margin-right: ${({ mr }) => mr};

  ${({ variant }) => variants(variant)}
`

export default Text

