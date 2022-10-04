import {Button} from '../../elements'

const ButtonList =(props) => {
    const {buttonsName} = props
    return (
        <>
        {buttonsName.map((button)=> <Button isHover={true} >{button}</Button> )}
        </>
    )
}

export default ButtonList