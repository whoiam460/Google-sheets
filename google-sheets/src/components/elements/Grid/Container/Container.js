import ContainerStyled from "./Container.styled"

const Container = (props) =>{
    const {children, variant} = props
    return(
    <ContainerStyled variant= {variant}>{children}</ContainerStyled>
        
    )
}
export default Container