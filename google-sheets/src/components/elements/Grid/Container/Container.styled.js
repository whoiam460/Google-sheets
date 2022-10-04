import styled from 'styled-components'

const ContainerSize = {
  xxl: `
    margin: 0 auto;
    @media(min-width: 1400px){
    width: 1320px;
  } 
  @media(max-width: 1400px){
    width: 100%;
  }
  `,

  xl: `
      margin: 0 auto;
      @media(max-width:1200px) {
      width:100%;
    }
    @media(min-width: 1200px){
      max-width: 1140px;
    }
    @media(min-width: 1400px){
      max-width: 1320px;
    }`,

  lg: `
      margin: 0 auto;
      @media(max-width:992px){
       width:100%;
     }
     @media(min-width: 992px){
      max-width: 960px;
      
    }
     @media(min-width: 1200px){
      max-width: 1140px; 
    }
     @media(min-width: 1400px){
      max-width: 1320px; 
    }`,

  md: `
    margin: 0 auto;
    @media(max-width:768px){
       width:100%;
     }
     @media(min-width: 768px){
      max-width: 720px;
    }
     @media(min-width: 992px){
      max-width: 960px;
    }
     @media(min-width: 1200px){
      max-width: 1140px;
    }
     @media(min-width: 1400px){
      max-width: 1320px;
    }`,

  sm: `
    margin: 0 auto;
    @media(max-width:576px){
      width:100%;
    }
    @media(min-width:576px){
       width:100%;
     }
     @media(min-width: 768px){
      max-width: 720px;
    }
     @media(min-width: 992px){
      max-width: 960px;
    }
     @media(min-width: 1200px){
      max-width: 1140px;
    }
     @media(min-width: 1400px){
      max-width: 1320px;
    }`,

  fluid: `
      width: 100%;
      
    `,
}

const ContainerStyled = styled.div`
  ${props => ContainerSize[props.variant]}
`

export default ContainerStyled