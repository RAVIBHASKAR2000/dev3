/** @jsx jsx */

import { jsx } from '@emotion/core';
import { SocialIcon } from 'react-social-icons';
import { useQuery } from '@apollo/client';
import getConfig from 'next/config';
import { Container, Loading, H2, H3 } from '../primitives';
import EventItems from '../components/EventItems';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { gridSize } from '../theme';
import { initializeApollo } from '../lib/apolloClient';

import { GET_ALL_EVENTS } from '../graphql/events';
const { publicRuntimeConfig } = getConfig();
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export default function ContactUs() {
  const { meetup } = publicRuntimeConfig;
  const { data: { allEvents } = {}, loading, error } = useQuery(GET_ALL_EVENTS);

  if (error) {
    console.error('Failed to load events', error);
  }

  return (
    <>
      <Meta title="ContactUs" />
      <Navbar background="#f96c07" />
      <Container css={{ marginTop: gridSize * 3 }}>
        <H2>Contact Us</H2>
        <div css={{
          marginTop:'5rem',
        }}>
         <p ><h3 css={{display:'inline',}}>Address: </h3> {meetup.Address}</p>
         <p><h3 css={{display:'inline',}}>Contact No: </h3> <a css={{textDecoration:'none',}} href={`tel:${meetup.contact1}`}>{meetup.contact1}</a> <a css={{textDecoration:'none',}}  href={`telto:${meetup.contact2}`} >{meetup.contact2}</a> </p>  
         <p><h3 css={{display:'inline',}}> E-mail: </h3> <a href={`mailto:${meetup.email}`} passHref={true}>{meetup.email}</a></p>  
         <p><h3 css={{display:'inline',}}>Website: </h3> <a href={meetup.website} passHref={true}>{meetup.website}</a></p>   

        </div>
        <div css={{
          margin:'4rem'
        }}>
          <h3>How to reach us?</h3>
       
          <div style={{ height: '100vh', width: '100%' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28383.241512237466!2d78.00952783002444!3d27.222126356331753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397470aa1f880ca1%3A0xeaeb464c7a78b0be!2sKamla%20Nagar%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1598012832777!5m2!1sen!2sin" width="800" height="500" frameborder="0" css={{border:0}} aria-hidden="false" tabindex="0"></iframe>
           </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_EVENTS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
