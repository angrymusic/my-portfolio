import styled, { keyframes, css } from "styled-components";
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

    //날씨 open weather api
    const getWeather = async () => {
        setWeather("☀ 맑음");
        // 요청 횟수 제한으로 인해 임시 주석 처리
        // let weatherCode: number;
        // await axios
        //   .get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=259e58e12fe92e7d35db8c432d0f58c9&units=metric')
        //   .then((res) => {
        //     weatherCode = res.data.weather[0].id;
        //     if (weatherCode < 600) setWeather('🌧 비');
        //     else if (weatherCode < 700) setWeather('🌨 눈');
        //     else if (weatherCode < 800) setWeather('🌫 안개');
        //     else if (weatherCode === 800) setWeather('☀ 맑음');
        //     else setWeather('☁ 흐림');
        //   })
        //   .catch((err) => {
        //     console.log("can't get weather");
        //     setWeather('☀ 맑음');
        //   });
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
        countVisit();
        getWeather();
        typing();
        console.log(typingEnd);
    }, []);

    return (
        <Wrapper className="App">
            <Container>
                <Head>
                    <HeadLeft>
                        <MySign>L M J</MySign>
                        {today} {weather}
                    </HeadLeft>
                    <HeadCenter>
                        <MainTitle>민</MainTitle>
                        <MainTitle>재</MainTitle>
                        <MainTitle>일</MainTitle>
                        <MainTitle>보</MainTitle>
                    </HeadCenter>
                    <HeadRight>
                        <YCenter>
                            &nbsp;
                            <LittleIcon src="./svg/githublogo.svg" alt="github icon" />
                            &nbsp;
                            <a target="_blank" rel="noreferrer" href="https://github.com/angrymusic">
                                GitHub
                            </a>
                        </YCenter>
                        <YCenter>
                            &nbsp;
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
                    <BodyCenter>
                        <Headline>
                            {headline}
                            <Cursor typingEnd={typingEnd}>|</Cursor>
                        </Headline>
                        <Question>본인 소개 먼저 해주실까요?</Question>
                        <Answer>안녕하세요 저는 프론트엔드 직군으로 시작한 신입 개발자 이민재라고 합니다.</Answer>
                        <Question>프론트엔드로 개발을 시작한 이유가 무엇인가요?</Question>
                        <Answer>
                            우선 제가 개발자를 꿈꾸게 된 이유는 새로운 무언가를 창조할 수 있기 때문입니다.
                            <br />
                            나만의 무언가를 만들어낸다는 것 만큼 재밌고 자극적인 것은 없다고 생각합니다. 그리고 만든
                            것을 바로 눈으로 볼 수 있다면 더 재밌어질 것입니다.
                            <br />
                            그래서 저는 웹 프론트엔드 개발자가 되기로 결심했습니다. 결과를 바로 볼 수도 있고 많은
                            사람들에게 쉽게 노출될 수 있습니다. 그만큼 중요한 역할이 될 것이고 돌아오는 보람과 성취감도
                            크다고 생각하기 때문입니다.
                        </Answer>
                        <Question>현재는 어떤 일을 하고 계신가요?</Question>
                        <Answer>
                            대학생으로서의 마지막 순간을 음미하며 프론트엔드에 관한 것이라면 이것 저것 다 경험해보려고
                            노력하고 있습니다.
                        </Answer>
                        <Question>이때까지 경험해보신 기술들은 어떤게 있을까요?</Question>
                        <Answer>제가 사용해본 기술들은!</Answer>
                    </BodyCenter>
                    <BodyRight>BodyRight</BodyRight>
                </Body>
                <Foot>Foot</Foot>
            </Container>
        </Wrapper>
    );
}
const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

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
    flex: 6;
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
    justify-content: end;
    flex-direction: column;
    text-align: center;
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
const Headline = styled.div`
    font-size: 36px;
    font-family: "ChosunBg";
    margin-bottom: 10px;
`;
const Cursor = styled.span<{ typingEnd: boolean }>`
    animation: ${(props) => {
        if (props.typingEnd) {
            return css`
                ${blinkAnimation} 1000ms infinite
            `;
        } else {
            return css`
                none
            `;
        }
    }};
`;
const MySign = styled(YCenter)`
    flex-grow: 1;
    display:flex;
    justify-content:center;
    font-size: 36px;
    font-family: "Caveat";
`;
const Question = styled.div`
    font-family: "ChosunBg";
    font-size: 18px;
`;
const Answer = styled.p``;
export default App;
