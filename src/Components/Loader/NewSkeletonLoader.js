import propTypes from "prop-types"
import styled, { keyframes } from "styled-components"

// PUNTOS DE QUIEBRE
const breakpoints = {
    small: 320,
    medium: 640,
    large: 1024,
    xlarge: 1440
}
// ANIMACION SKELETON
const blur = keyframes `
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`
// COMPONENTES ESTILIZADOS
const TextDiv = styled.div`
    width: ${props => props.textWidth / 16}rem;
    height: ${props => props.textHeight / 16}rem;
    background-color: ${props => props.textBackgroundColor};
    border-radius: 3px; 
    margin: ${props => props.textAlign};
    animation: ${blur} 1s linear infinite alternate; 
    
    @media only screen and (max-width: ${breakpoints.medium / 16}rem)
    {
        height: ${props => (props.textHeight - (props.textHeight * 0.10)) / 16}rem
    }
`
const CircularDiv = styled.div`
    width: ${props => props.circularWidth / 16}rem;
    height: ${props => props.circularHeight / 16}rem;
    background-color: ${props => props.circularBackgroundColor};
    border-radius: 50%;
    margin: ${props => props.circularAlign};
    animation: ${blur} 1s linear infinite alternate;

    @media only screen and (max-width: ${breakpoints.medium / 16}rem)
    {
        width: ${props => (props.circularHeight - (props.circularHeight * 0.10)) / 16}rem;
        height: ${props => (props.circularHeight - (props.circularHeight * 0.10)) / 16}rem;
    }
`
const RectangularDiv = styled.div`
    width: ${props => props.rectangularWidth / 16}rem;
    height: ${props => props.rectangularHeight / 16}rem;
    display: flex;
    flex-direction: column;
    margin: ${props => props.rectangularAlign};
    gap: ${props => props.rectangularGap}rem;

    @media only screen and (max-width: ${breakpoints.medium / 16}rem)
    {
        height: ${props => (props.rectangularHeight - (props.rectangularHeight * 0.10)) / 16}rem;
    }
`
const ParagraphDiv = styled.div`
    width: 100%;
    height: ${props => props.paragraphHeight}rem;
    background-color: ${props => props.paragraphBackgroundColor};
    border-radius: 3px;
    animation: ${blur} 1s linear infinite alternate;

    @media only screen and (max-width: ${breakpoints.medium / 16}rem)
    {
        height: ${props => (props.paragraphHeight - (props.paragraphHeight * 0.10))}rem;
    }
`

const NewSkeleton = ({ type, width, height, align }) => {
    const skeletonStyles = {
        backgroundColor: "hsl(275, 0%, 73%)",
        marginBottom: 0.75, // En "rem".
        flexGap: 0.75, // En "rem".
        paragraphsHeight: 0.75, // En "rem".
    }
    // ESTILOS GLOBALES A TODOS LOS ELEMENTOS SKELETON
    const skeletonDefaultProps = {
        text: {
            width: 350,
            height: 150
        },
        circular: {
            width: 70,
            height: 70
        },
        rectangular: {
            width: 500,
            height: 150
        }
    }
    // DEFAULTS PROPS de los VALORES "width" y "height", DEPENDIENDO DEL TIPO RECIBIDO EN "type"

    switch(align)
    {
        case "start":
            align = `0 auto ${skeletonStyles.marginBottom}rem 0`
            break
        case "center":
            align = `0 auto ${skeletonStyles.marginBottom}rem auto`
            break
        case "end":
            align = `0 0 ${skeletonStyles.marginBottom}rem auto`
            break
        default:
            align = `0 auto ${skeletonStyles.marginBottom} 0`
    }
    /* DEPENDIENDO DEL VALOR INGRESADO POR EL USUARIO EN LA PROP "align", LE ASIGNO A ESTA SU
    RESPECTIVO VALOR CSS (ALINEADO HORIZONTAL) */
    
    switch(type)   
    {
        case "text":
            if (!width)
            {
                width = skeletonDefaultProps.text.width
            }
            if (!height)
            {
                height = skeletonDefaultProps.text.height
            }
            return (
                <TextDiv 
                    className="text-skeleton"
                    textWidth={width} 
                    textHeight={height}
                    textBackgroundColor={skeletonStyles.backgroundColor}
                    textAlign={align}
                >
                </TextDiv>
            )
        case "circular":
            if (!width)
            {
                width = skeletonDefaultProps.circular.width
            }
            if (!height)
            {
                height = skeletonDefaultProps.circular.height
            }
            if (width !== height)
            {
                width = skeletonDefaultProps.circular.width
                height = skeletonDefaultProps.circular.height
            }
            return (
                <CircularDiv
                    className="circular-skeleton"
                    circularWidth={width}
                    circularHeight={height}
                    circularBackgroundColor={skeletonStyles.backgroundColor}
                    circularAlign={align}
                >
                </CircularDiv>
            )
        case "rectangular":
            if (!width)
            {
                width = skeletonDefaultProps.rectangular.width
            }
            if (!height)
            {
                height = skeletonDefaultProps.rectangular.height
            }
            const paragraphsPixelsHeight = skeletonStyles.paragraphsHeight * 16 
            // TAMAÑO DE CADA UNO DE LOS ELEMENTOS "ParagraphDiv", PASADO A PIXELS 
            const gapPixelsSpace = (skeletonStyles.flexGap * 16) 
            /* TAMAÑO DEL ESPACIADO (GAP) DENTRO DEL ELEMENTO/CONTENDOR "RectanguladDiv" PASADO
            A PIXELS */
            const paragraphsTotal = Math.round(height / (paragraphsPixelsHeight + gapPixelsSpace))
            /* CANTIDAD DE PARRAFOS TOTAL (ParagraphDiv), DEPENDIENDO DEL ANCHO INGRESADO POR EL 
            USUARIO (height), EL TAMAÑO DE CADA UNO DE ESTOS Y EL ESPACIADO DENTRO DE SU CONTENEDOR 
            (RectangularDiv) */ 
            
            const createParagraphs = () => {
                let paragraphsRendereded = []
                for(let i = 0; i < paragraphsTotal; i++)
                {
                    paragraphsRendereded.push(
                        <ParagraphDiv
                            key={i}
                            className="paragraph"
                            paragraphHeight={skeletonStyles.paragraphsHeight}
                            paragraphBackgroundColor={skeletonStyles.backgroundColor}
                        >
                        </ParagraphDiv>
                    )
                }
                return paragraphsRendereded
            } 
            /* FUNCION CON LA QUE CREO LA CANTIDAD DE ELEMENTOS (PARRAFOS) CORRESPONDIENTES AL VALOR
            ALMACENADO EN LA VARIABLE "paragraphsTotal" */

            return (
                <RectangularDiv
                    className="rectangular-skeleton"
                    rectangularWidth={width}
                    rectangularHeight={height}
                    rectangularGap={skeletonStyles.flexGap}
                    rectangularAlign={align}
                >
                    {
                        createParagraphs()
                    }
                </RectangularDiv>
            )
        default:
            return (
                <TextDiv 
                    className="text-skeleton"
                    textWidth={skeletonDefaultProps.text.width} 
                    textHeight={skeletonDefaultProps.text.height}
                    textBackgroundColor={skeletonStyles.backgroundColor}
                    textAlign={align}
                >
                </TextDiv>
            )
    }
}

NewSkeleton.propTypes = {
    type: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
    align: propTypes.string
}

NewSkeleton.defaultProps = {
    type: "text",
    align:"start"
}

export default NewSkeleton