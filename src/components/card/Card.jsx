import { StyledCard } from "./card.styles"

const Card =({$color})=>{

    return (
        <>
            <StyledCard $color={$color}>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p></p>
                        <p></p>
                    </div>

                    <p>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
                    <p></p>
                </div>
            </StyledCard>
        
        </>
    )
}

export default Card