import { StyledCard, StyledImage, StyledName, StyledNameContainer, StyledOpinion, StyledPersonContainter, StyledText, StyledVerified } from "./card.styles"

const Card =({$color, $borderColor,$gridColumn,$gridRow,$width, name, text, opinion,image})=>{

    return (
        <>
            <StyledCard $color={$color} $gridColumn={$gridColumn} $gridRow={$gridRow} $width={$width}>
                <StyledPersonContainter>
                      <StyledImage src={`./images/image-${image}.jpg`} $borderColor={$borderColor}alt="" />
                    <StyledNameContainer>
                        <StyledName $color={$color}>{name}</StyledName>
                        <StyledVerified $color={$color}>Verified Graduate</StyledVerified>
                    </StyledNameContainer>
                </StyledPersonContainter>
                    <StyledText $color={$color}>{text}</StyledText>
                    <StyledOpinion $color={$color}>{opinion}</StyledOpinion>
                
            </StyledCard>
        
        </>
    )
}

export default Card