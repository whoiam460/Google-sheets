const Img =(props) => {
    const {width , height,src,alt}= props

    return <img width={width} height={height} src={src} alt={alt}/>
}

export default Img