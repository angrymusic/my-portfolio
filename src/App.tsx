import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [today, setToday] = useState("");
    const [weather, setWeather] = useState("");
    const [visits, setVisits] = useState();
    const [headline, setHeadline] = useState("");
    const [typingEnd, setTypingEnd] = useState(false);

    const getDay = () => {
        const today = new Date();
        const week = ["일", "월", "화", "수", "목", "금", "토"];

        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth() + 1;
        const todayDate = today.getDate();
        const todayWeek = week[today.getDay()];

        setToday(todayYear + "년 " + todayMonth + "월 " + todayDate + "일 " + todayWeek + "요일");
    };

    //count api 로 방문자 수 체크
    const countVisit = async () => {
        //https://api.countapi.xyz/set/angrymusic/visits?value=0  <-- 방문자수 0으로 초기화
        await axios.get("https://api.countapi.xyz/hit/angrymusic/visits").then((res: any) => {
            setVisits(res.data.value);
        });
    };
    const typing = (counter = 0) => {
        const txt = "[속보] 프론트엔드 개발자 이민재 인터뷰 화제";
        let tmp = "";
        setInterval(() => {
            if (txt.length === counter) {
                setTypingEnd(true);
                return;
            }
            tmp = tmp + txt[counter];
            setHeadline(tmp);
            counter++;
        }, 80);
    };

    useEffect(() => {
        getDay();
        // countVisit();
        typing();
    }, []);

    return (
        <Wrapper className="App">
            <Container>
                <Head>
                    <HeadLeft>{today}</HeadLeft>
                    <HeadCenter>
                        <MainTitle>민</MainTitle>
                        <MainTitle>재</MainTitle>
                        <MainTitle>일</MainTitle>
                        <MainTitle>보</MainTitle>
                    </HeadCenter>
                    <HeadRight>
                        <YCenter>
                            <LittleIcon src="./svg/githublogo.svg" alt="github icon" />
                            &nbsp;
                            <a target="_blank" rel="noreferrer" href="https://github.com/angrymusic">
                                GitHub
                            </a>
                        </YCenter>
                        <YCenter>
                            <LittleIcon src="../svg/notion.svg" alt="notion icon" />
                            &nbsp;
                            <a target="_blank" rel="noreferrer" href="https://angrymusic.notion.site/">
                                Notion
                            </a>
                        </YCenter>
                        <YCenter>
                            📧&nbsp;
                            <a href="mailto:angrymusic@naver.com">angrymusic@naver.com</a>
                        </YCenter>
                        <YCenter>💎 어제보다 더 채워져가는 중입니다.</YCenter>
                    </HeadRight>
                </Head>
                <Body>
                    <BodyLeft>BodyLeft</BodyLeft>
                    <BodyCenter>{headline}</BodyCenter>
                    <BodyRight>BodyRight</BodyRight>
                </Body>
                <Foot>Foot</Foot>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    overflow-x: hidden;
    background-color: #b1ac88;
    font-family: "Chosun-light";
    font-size: 14px;
    padding: 10px;
    a {
        color: inherit;
        text-decoration: none;

        background: linear-gradient(to right, rgba(255, 0, 0, 1), rgb(255, 0, 179), rgba(0, 100, 200, 1));
        background-size: 0 1.5px;
        background-position: 0% 90%;
        background-repeat: no-repeat;
        transition: background-size 300ms;
    }
    a:hover {
        background-size: 100% 1.5px;
    }
`;
const Container = styled.div`
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.251);
    background-color: #e2e0d7;
    max-width: 1200px;
    min-height: 100vh;
    padding: 10px;
    margin: 10px auto;
`;
const Side = styled.div`
    flex: 2;
    padding-left: 5px;
    padding-right: 5px;
`;
const Center = styled.div`
    flex: 5;
    padding-left: 5px;
    padding-right: 5px;
`;
const Head = styled.div`
    border-bottom: double 3px;
    display: flex;
    padding-bottom: 10px;
`;
const HeadLeft = styled(Side)`
    display: flex;
    justify-content: center;
`;
const HeadCenter = styled(Center)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "ChosunLo", serif;
    font-size: 60px;
    border-left: solid 1px;
    border-right: solid 1px;
`;
const HeadRight = styled(Side)`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const Body = styled.div`
    margin: 10px 0px;
    display: flex;
`;
const BodyLeft = styled(Side)``;
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
    padding-left: 5px;
    padding-right: 5px;
`;
const MainTitle = styled.span`
    transform: translateY(0);
    transition: 0.15s ease-in-out;
    &:hover {
        transform: translateY(-10px);
    }
`;
const LittleIcon = styled.img`
    width: 14px;
`;
const YCenter = styled.div`
    display: flex;
    align-items: center;
`;
export default App;
