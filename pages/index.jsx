import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getEvents, getAllNews } from "../server/database";
// import { useAuthState } from "react-firebase-hooks/auth"; // to check if user is signed in
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Container, FlexBox, Wrapper } from "../styles/globals";
import NavBar from '../components/Organisms/NavBar';
import CarouselCard from "../components/Organisms/CarouselCard";
import NewsCard from "../components/Organisms/NewsCard";
import TopNavigation from '../components/Organisms/NavBarTop';
import FloatingActionButton from "../components/Atoms/FloatButton";
import AllNews from "../components/Templates/AllNews";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from './api/auth/[...nextauth].js';
import { unstable_getServerSession } from "next-auth/next";
import Loading from "../components/Molecules/LoadingAnimation/LoadingAnimation";


const SearchBar = styled.div`
height: 5vh;
width: 30vw;
background-color: lightgray;
border-radius: 10px;
display: flex;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 767px) {
    width: 90vw;
}
`

const ImageContainer = styled.div`
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
width: 35vw;
height: 25vh;
// margin-right: 5%;
@media (max-width: 767px) {
    width: 90vw;
    height: 25vh;
}
`;

const FlexWords = styled.div`
display; flex;
width: 90vw;
// justfiy-content: space-between;
`;

const UpcomingEventsContainer = styled.div`
width: 95vw;
overflow: hidden;
`

const EventListContainer = styled.div`
white-space: nowrap;
overflow-x: scroll;
overflow-y: hidden;
-webkit-overflow-scrolling: touch;
&::-webkit-scrollbar {
  display: none;
}
`

export const SubHeader = styled.p`
font-size: 16px;
margin-bottom:20px;
`
const FirstSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 767px) {
  flex-direction: column;
}
`

const TopBar = styled.div`
  @media (max-width: 767px) {
    display:none;
}
`

// this should be homepage, just using for testing right now
// maybe move some of this to map
export default function Home({ sortedEvents, sortedAllNews }) {
  const { data: session } = useSession()

  // const foodBanksComponent = foodBanksList.map((foodbank) => (
  //   // <li key={fb.id}>
  //   <li key="test">
  //     <p>{foodbank.programName}</p>
  //   </li>
  // ));

  const UpcomingEventCards = sortedEvents.map((e) => {
    // const time = e.start
    // const date = time ? new Date(time * 1000) : new Date(e.eventDate)
    const startDay = new Date(e.start).toLocaleString("default", { dateStyle: "long" })
    const startTime = new Date(e.start).toLocaleString("default", { timeStyle: "short" })
    const endDay = new Date(e.end).toLocaleString("default", { dateStyle: "long" })
    const endTime = new Date(e.end).toLocaleString("default", { timeStyle: "short" })
    const sDay = startDay.split(" ")[1].split("").splice(0, 2).join("");
    const sMonth = startDay.split(" ")[0].split("").splice(0, 3).join("").toUpperCase();
    const eDay = endDay.split(" ")[1].split("").splice(0, 2).join("");
    const eMonth = endDay.split(" ")[0].split("").splice(0, 3).join("").toUpperCase();
    let eventTime;
    if (startDay == endDay) {
      startTime == endTime ? eventTime = startTime : eventTime = `${startTime} - ${endTime}`;
    } else {
      eventTime = `${sMonth} ${sDay}, ${startTime} - ${eMonth} ${eDay}, ${endTime}`
    }

    // const dateOfEvent = date.toLocaleString("default", { month: "long", day: "2-digit", year: "numeric" })
    return (
      <li key={e.id} style={{ marginRight: "5%" }}>
        <a href={`/events/${e.id}`}>
          <CarouselCard event={e.eventName} time={eventTime} src={e.eventImage} month={sMonth} day={sDay} />
        </a>
      </li>
    )
  })

  return (
    <div >

      <Head>
        <title>LocalToMe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Loading /> */}
      <TopBar>
        <TopNavigation value={0} />
      </TopBar>

      <div style={{ padding: "5% 5% 5% 5%", overflowX: "hidden" }}>

        <FirstSection>
          <div>
            {/* {!session ? <button onClick={() => signIn()}>Sign In</button> : null} */}

            <SubHeader>Good Morning,</SubHeader>
            <h1 style={{ color: "green", lineHeight: "0", marginBottom: "4%" }}>{session ? session.user.name.split(" ")[0] : "Slayerina"}</h1>
            {/* <SearchBar>Search</SearchBar> */}
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5%" }}>
              <p>Find help near you</p>
              <Link href={`/map`}>
                <p style={{ color: "green" }}>view all</p>
              </Link>
            </div>
            <Link key="link-to-map" href="/map">
              <ImageContainer src={"/FoodBankMap.png"} ></ImageContainer>
            </Link>
          </div>
        </FirstSection>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5%" }}>
          <SubHeader>Upcoming Events</SubHeader>
          <Link href={`/community?tabId=0`}>
            <p style={{ color: "green" }}>view all</p>
          </Link>
        </div>
        <UpcomingEventsContainer>
          <EventListContainer>
            <ul style={{ display: "flex", listStyle: "none", padding: "0" }}>
              {UpcomingEventCards}
            </ul>
          </EventListContainer>
        </UpcomingEventsContainer>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "auto 5%" }}>
        <SubHeader>Community News</SubHeader>
        <Link href={`/community?tabId=1`}>
          <p style={{ color: "green" }}>view all</p>
        </Link>
      </div>
      <AllNews allNews={sortedAllNews} sessionEmail={session ? session.user.email : null} />
      <FloatingActionButton />
      <div className="smallDisplayNone">
        <NavBar value={0} />
      </div>

    </div >
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  const req = await getEvents();
  const events = JSON.parse(JSON.stringify(req));
  const sortedEvents = events.sort((a, b) => new Date(a.start) - new Date(b.start));


  const news = await getAllNews();
  const allNews = JSON.parse(JSON.stringify(news)); // filter out old events?
  const sortedAllNews = allNews.sort((a, b) => new Date(b.newsDateCreated) - new Date(a.newsDateCreated));

  // console.log("THIS ONE", sortedAllNews)

  if (!session) {
    return {
      props: { sortedEvents, sortedAllNews }
    }
  }

  return {
    props: { sortedEvents, sortedAllNews, session },
  }
}
