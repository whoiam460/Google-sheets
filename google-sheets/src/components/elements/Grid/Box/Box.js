import { BoxStyled } from "./Box.styled"

const Box =(props) => {
    const {children, ...rest} = props
    return (
        <BoxStyled {...rest}>
            {children}
        </BoxStyled>
    )
}

export default Box