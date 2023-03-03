import styled from "styled-components";

function App() {
    return (
        <Wrapper className="App">
            <Container>
                <Head>
                    <HeadLeft>HeadLeft</HeadLeft>
                    <HeadCenter>HeadCenter</HeadCenter>
                    <HeadRight>HeadRight</HeadRight>
                </Head>
                <Body>
                    <BodyLeft>BodyLeft</BodyLeft>
                    <BodyCenter>BodyCenter</BodyCenter>
                    <BodyRight>BodyRight</BodyRight>
                </Body>
                <Foot>Foot</Foot>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #b1ac88;
`;
const Container = styled.div`
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.251);
    background-color: #e2e0d7;
    max-width: 1200px;
    min-height: 100vh;
    padding: 10px 2vw 20px;
    margin: 10px auto;
`;
const Side = styled.div`
    flex: 2;
`;
const Center = styled.div`
    flex: 5;
`;
const Head = styled.div`
    border-bottom: double 3px;
    display: flex;
`;
const HeadLeft = styled(Side)`
    display: flex;
    justify-content: center;
`;
const HeadCenter = styled(Center)`
    display: flex;
    justify-content: center;
`;
const HeadRight = styled(Side)`
    display: flex;
    justify-content: center;
`;
const Body = styled.div`
    margin: 10px 0px;
    display: flex;
`;
const BodyLeft = styled(Side)`
`;
const BodyCenter = styled(Center)`
    border-left: solid 1px;
    border-right: solid 1px;
`;
const BodyRight = styled(Side)`
    flex: 2;
`;
const Foot = styled.div`
    display: flex;
    justify-content: center;
`;
export default App;
