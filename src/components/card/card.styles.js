import styled from 'styled-components';

const StyledCard = styled.div`
	width: 327px;
	height: max-content;
	background-color: ${({ $color }) => $color};
	border-radius: 8px;
	box-sizing: border-box;
	padding: 26px 32px 32px 32px;
	box-shadow: 4px 4px 25px -8px #cfcfcf;
	@media (min-width: 768px) {
		width: ${({ $width }) => $width};
		grid-column: ${({ $gridColumn }) => $gridColumn};
		grid-row: ${({ $gridRow }) => $gridRow};
		align-items: start;
	}
`;
const StyledImage = styled.img`
	width: 28px;
	height: 28px;
	border-radius: 50%;
	border: 2px ${({ $borderColor }) => ($borderColor ? '#df82fc' : 'none')} solid;
	margin-right: 17px;
`;
const StyledPersonContainter = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const StyledNameContainer = styled.div``;

const StyledName = styled.p`
	color: ${({ $color }) => ($color === 'white' ? '#48556A' : 'white')};
	font-size: 13px;
`;

const StyledVerified = styled.p`
	font-size: 11px;
	color: ${({ $color }) => ($color === 'white' ? '#48556a80' : '#ffffff80')};
`;

const StyledText = styled.p`
	font-size: 20px;
	color: ${({ $color }) => ($color === 'white' ? '#48556A' : 'white')};
	font-weight: 600;
	padding: 18px 0 16px 0;
`;

const StyledOpinion = styled.p`
	font-size: 13px;
	color: ${({ $color }) => ($color === 'white' ? '#48556ab3' : '#cfcfcfb3')};

	line-height: 18px;
`;
export {
	StyledCard,
	StyledImage,
	StyledPersonContainter,
	StyledNameContainer,
	StyledName,
	StyledVerified,
	StyledText,
	StyledOpinion
};
