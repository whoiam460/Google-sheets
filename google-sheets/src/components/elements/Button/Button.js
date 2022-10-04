import { ButtonStyled, TextWrapper, TextWrapperIcon } from './Button.styled'

const Button = props => {
  const { isHover, isActive, children, shape, icon, variant, ...rest } = props

  console.log(isHover);

  return (
    <ButtonStyled
      {...rest}
      variant={variant}
      isHover={isHover}
      isActive={isActive}
      shape={shape}>
      {icon && children ? (
        <>
          {icon} <TextWrapperIcon>{children}</TextWrapperIcon>
        </>
      ) : icon ? (
        icon
      ) : children ? (
        <TextWrapper>
        {children}
        </TextWrapper>
      ) : null}
    </ButtonStyled>
  )
}

export default Button