/** @jsx jsx */

import { jsx } from '@emotion/core';

import { useQuery } from '@apollo/client';
import {  H3 ,H4,H5} from '../primitives/Typography';
import { Container, Loading, H2 } from '../primitives';
import EventItems from '../components/EventItems';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { gridSize } from '../theme';
import { initializeApollo } from '../lib/apolloClient';
import { GET_CURRENT_EVENTS } from '../graphql/events';


function processEventsData(data) {
  
  const upcomingEvents = data.upcomingEvents.slice();
  const previousEvents = data.previousEvents.slice();

  return {
    upcomingEvents,
    previousEvents,
    
  };
}


export default function Events({ now }) {
  
  const {
    data: eventsData = {},
    loading: eventsLoading,
    error: eventsError,
  } = useQuery(GET_CURRENT_EVENTS, { variables: { now } });

  const { upcomingEvents, previousEvents} = processEventsData(eventsData);


  return (
    <>
      <Meta title="Events" />
      <Navbar background="#f96c07" />
      <Container css={{ marginTop: gridSize * 3 }}>
        <H2>Events</H2>
        {eventsLoading ? (
          <Loading isCentered size="xlarge" />
        ) : eventsError ? (
          <p>Something went wrong. Please try again.</p>
        ) : (
          <>
          <div css={{marginTop:'2rem'}}>
            <H3 css={{textAlign:'center', textDecoration:'underline'}}>Up-Comming</H3>
            <EventItems events={upcomingEvents} />
          </div>
          <div css={{marginTop:'3rem'}}>
            <H3 css={{textAlign:'center', textDecoration:'underline'}}>Previous Events</H3>
            <EventItems events={previousEvents}/>
          </div>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const now = new Date().toISOString();
  await apolloClient.query({
    query: GET_CURRENT_EVENTS,
    variables: { now },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      now,
    },
    revalidate: 1,
  };
}
