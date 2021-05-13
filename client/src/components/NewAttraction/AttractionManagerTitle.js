import styled from 'styled-components';

export const TitleContainer = styled.div`
align-items: center;
width: 50%;
height: 25px;
padding-left: 1%;
margin-right: 50%;
`
export const Title = styled.div`
font-size: 200%;
margin-top: 1%;
padding-top: 5px;
margin-bottom: 15px;
width: 50%;
`

const AttractionManagerTitle = () => {
    return (
        <>
        <TitleContainer>
            <Title>Attraction Manager</Title>
        </TitleContainer>
        </>
    )
}

export default AttractionManagerTitle