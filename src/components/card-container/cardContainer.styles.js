import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;
	background-color: #eff1f1;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 30px;
	}
`;

export { StyledContainer };
